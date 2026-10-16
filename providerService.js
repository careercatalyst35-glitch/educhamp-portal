const fs = require('fs');
const path = require('path');

function getConfig() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return {
      ollama_base_url: 'http://localhost:11434',
      generator_model: 'qwen2.5:7b',
      solver_model: 'deepseek-r1:7b',
      verifier_model: 'llama3.1:8b',
      expander_model: 'qwen2.5:7b',
      keep_alive: '15m'
    };
  }
}

// Bulletproof JSON parser that repairs LaTeX escapes, invalid \u, and trailing commas
function safeParseJson(raw, schemaHint = '') {
  if (typeof raw !== 'string') return raw;
  let str = raw.trim();

  // Strip markdown code fences
  if (str.startsWith('```json')) {
    str = str.replace(/^```json\s*/, '').replace(/\s*```$/, '');
  } else if (str.startsWith('```')) {
    str = str.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }

  // 1. Try direct parse
  try {
    return JSON.parse(str);
  } catch (e1) {}

  // 2. Extract outermost JSON structure
  const firstBrace = str.indexOf('{');
  const firstBracket = str.indexOf('[');
  let startIdx = -1;
  let endIdx = -1;

  if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
    startIdx = firstBrace;
    endIdx = str.lastIndexOf('}');
  } else if (firstBracket !== -1) {
    startIdx = firstBracket;
    endIdx = str.lastIndexOf(']');
  }

  if (startIdx !== -1 && endIdx > startIdx) {
    str = str.substring(startIdx, endIdx + 1);
    try {
      return JSON.parse(str);
    } catch (e2) {}
  }

  // 3. Fix unescaped backslashes (especially LaTeX like \alpha, \frac, \unit) and trailing commas
  let fixed = str
    .replace(/\\u(?![0-9a-fA-F]{4})/g, '\\\\u')
    .replace(/\\([^"\\\/bfnrt])/g, '\\\\$1')
    .replace(/,\s*([\}\]])/g, '$1');

  try {
    return JSON.parse(fixed);
  } catch (e3) {
    // 4. Double escape lone backslashes as last resort
    try {
      const ultraFixed = str
        .replace(/\\/g, '\\\\')
        .replace(/\\\\"/g, '\\"')
        .replace(/,\s*([\}\]])/g, '$1');
      return JSON.parse(ultraFixed);
    } catch (e4) {
      const optMatch = raw.match(/(?:option|answer|choice)\s*[:=]?\s*([A-D])\b/i) ||
                       raw.match(/\b([A-D])\s*(?:is\s+(?:the\s+)?correct)/i);
      if (optMatch) {
        return { solved_option: optMatch[1].toUpperCase(), proof: raw.slice(0, 150) };
      }
      throw e1;
    }
  }
}


// Inspect Ollama health and model availability
async function checkOllamaHealth() {
  const config = getConfig();
  const baseUrl = config.ollama_base_url || 'http://localhost:11434';
  const required = [
    { role: 'generator', model: config.generator_model || 'qwen2.5:7b' },
    { role: 'solver', model: config.solver_model || 'deepseek-r1:7b' },
    { role: 'verifier', model: config.verifier_model || 'llama3.1:8b' },
    { role: 'expander', model: config.expander_model || 'qwen2.5:7b' }
  ];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${baseUrl}/api/tags`, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) {
      return {
        online: false,
        error: `Ollama returned HTTP ${res.status}`,
        missingModels: required.map(r => r.model),
        pullCommands: required.map(r => `ollama pull ${r.model}`)
      };
    }

    const data = await res.json();
    const installed = new Set((data.models || []).map(m => m.name));
    const missing = [];
    const pullCommands = [];

    required.forEach(r => {
      // Check full tag or prefix match (e.g. qwen2.5:7b)
      const found = Array.from(installed).some(name => name.includes(r.model) || r.model.includes(name));
      if (!found && !missing.includes(r.model)) {
        missing.push(r.model);
        pullCommands.push(`ollama pull ${r.model}`);
      }
    });

    return {
      online: true,
      baseUrl,
      installedModels: Array.from(installed),
      missingModels: missing,
      pullCommands,
      allReady: missing.length === 0
    };
  } catch (err) {
    return {
      online: false,
      error: `Ollama unreachable at ${baseUrl}: ${err.message}`,
      message: 'Ollama is offline. Start it in terminal: ollama serve',
      missingModels: required.map(r => r.model),
      pullCommands: required.map(r => `ollama pull ${r.model}`)
    };
  }
}

// Call Ollama chat API with retries and exponential backoff
async function callOllamaChat(model, messages, options = {}) {
  const config = getConfig();
  const baseUrl = config.ollama_base_url || 'http://localhost:11434';
  const keepAlive = config.keep_alive || '15m';

  const payload = {
    model,
    messages,
    stream: false,
    format: 'json',
    keep_alive: keepAlive,
    options: {
      temperature: options.temperature !== undefined ? options.temperature : 0.2,
      num_ctx: options.num_ctx || 1536,
      num_predict: options.num_predict || 512,
      repeat_penalty: 1.15,
      repeat_last_n: 64
    }
  };

  const maxRetries = 3;
  let lastError = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      // 240s timeout for CPU execution
      const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 240000);

      const res = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error(`Ollama HTTP ${res.status}: ${await res.text()}`);
      }

      const data = await res.json();
      const rawContent = data.message?.content?.trim() || '';
      const rawThinking = data.message?.thinking?.trim() || '';
      let content = rawContent;
      if (!content && rawThinking) {
        content = rawThinking;
      }
      if (!content) {
        throw new Error('Empty response from model');
      }

      // DeepSeek-r1 may output <think>...</think> before JSON
      let cleaned = content;
      if (cleaned.includes('</think>')) {
        cleaned = cleaned.split('</think>').pop().trim();
      }

      const parsed = safeParseJson(cleaned, schemaHint);


      return { success: true, data: parsed, raw: content };
    } catch (err) {
      lastError = err;
      console.warn(`[Ollama ${model}] Attempt ${attempt}/${maxRetries} failed: ${err.message}`);
      if (attempt < maxRetries) {
        await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
      }
    }
  }

  // After 3 failed attempts, check if an external fallback LLM is configured
  if (config.fallback_llm_api_key && config.fallback_llm_provider) {
    // Optional external real LLM fallback (NEVER templates)
    return await callExternalLLMFallback(config, model, messages, options);
  }

  // Pauses job instead of generating low-quality templates!
  const pauseError = new Error(`Ollama not reachable or failed for model "${model}" - run: ollama serve`);
  pauseError.isOllamaPause = true;
  pauseError.model = model;
  pauseError.originalError = lastError?.message;
  throw pauseError;
}

// Call Google Gemini API (Free tier: gemini-2.0-flash / gemini-1.5-flash)
async function callGeminiChat(model, messages, options = {}) {
  const config = getConfig();
  const apiKey = config.gemini_api_key || process.env.GEMINI_API_KEY || config.fallback_llm_api_key;
  if (!apiKey) {
    const err = new Error('Google Gemini API Key is missing. Set "gemini_api_key" in config.json or environment variable GEMINI_API_KEY. (Free key: https://aistudio.google.com/app/apikey)');
    err.isGeminiKeyMissing = true;
    throw err;
  }

  const geminiModel = model || config.gemini_model || 'gemini-3.5-flash-lite';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${apiKey}`;

  let systemText = '';
  let userText = '';
  for (const m of messages) {
    if (m.role === 'system') {
      systemText += m.content + '\n\n';
    } else {
      userText += m.content + '\n\n';
    }
  }

  const payload = {
    contents: [
      {
        parts: [
          { text: `${systemText}TASK / PROMPT:\n${userText}\n\nIMPORTANT: Output ONLY valid JSON.` }
        ]
      }
    ],
    generationConfig: {
      temperature: options.temperature !== undefined ? options.temperature : 0.2,
      responseMimeType: 'application/json'
    }
  };

  const maxRetries = 3;
  let lastError = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 30000);

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (!res.ok) {
        const errBody = await res.text();
        if (res.status === 404 && geminiModel !== 'gemini-3.5-flash') {
          console.warn(`[Gemini] ${geminiModel} returned 404, falling back to gemini-3.5-flash...`);
          return await callGeminiChat('gemini-3.5-flash', messages, options);
        }
        if (res.status === 429) {
          const delayMatch = errBody.match(/"retryDelay":\s*"(\d+)s"/i);
          const waitSec = delayMatch ? Math.min(60, parseInt(delayMatch[1]) + 2) : (attempt * 5);
          console.warn(`[Gemini 429 Quota] Waiting ${waitSec}s before attempt ${attempt + 1}...`);
          if (attempt < maxRetries) {
            await new Promise(r => setTimeout(r, waitSec * 1000));
            continue;
          }
        }
        throw new Error(`Gemini HTTP ${res.status}: ${errBody}`);
      }

      const json = await res.json();
      const rawText = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
      if (!rawText) {
        throw new Error('Empty response from Gemini API');
      }

      const parsed = safeParseJson(rawText, '');


      return { success: true, data: parsed, raw: rawText };
    } catch (err) {
      lastError = err;
      console.warn(`[Gemini ${geminiModel}] Attempt ${attempt}/${maxRetries} failed: ${err.message}`);
      if (attempt < maxRetries) {
        await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
      }
    }
  }

  throw lastError;
}

// Inspect active AI Provider health
async function checkProviderHealth() {
  const config = getConfig();
  const apiKey = config.gemini_api_key || process.env.GEMINI_API_KEY || config.fallback_llm_api_key;
  if (config.provider === 'gemini' || apiKey) {
    return {
      provider: 'gemini',
      online: Boolean(apiKey),
      model: config.gemini_model || 'gemini-2.0-flash',
      hasKey: Boolean(apiKey),
      message: apiKey ? 'Google Gemini API is active (Free Tier ⚡)' : 'Gemini selected. Enter free API key from Google AI Studio.'
    };
  }
  return {
    provider: 'ollama',
    ...(await checkOllamaHealth())
  };
}

// Fallback to real external LLM (if configured in config.json)
async function callExternalLLMFallback(config, model, messages, options) {
  if (config.fallback_llm_provider === 'gemini' || config.gemini_api_key) {
    return await callGeminiChat(config.gemini_model || 'gemini-2.0-flash', messages, options);
  }
  throw new Error('External LLM fallback not configured. Pausing job.');
}

// Unified multi-role dispatcher
async function generateWithRole(role, prompt, schemaHint = '', callOptions = {}) {
  const config = getConfig();
  const apiKey = config.gemini_api_key || process.env.GEMINI_API_KEY || config.fallback_llm_api_key;
  const isGemini = config.provider === 'gemini' || (Boolean(apiKey) && config.provider !== 'ollama');

  const systemMessage = {
    role: 'system',
    content: `You are an expert Olympiad academic system for ICSE Class 10. You MUST output ONLY valid JSON matching this schema: ${schemaHint}. Do not include conversational remarks.`
  };

  const userMessage = {
    role: 'user',
    content: prompt
  };

  // If Gemini is configured, run immediately via Google AI Studio API
  if (isGemini) {
    const geminiModel = config.gemini_model || 'gemini-2.0-flash';
    return await callGeminiChat(geminiModel, [systemMessage, userMessage], callOptions);
  }

  let modelName;
  let temperature;

  switch (role) {
    case 'generator':
      modelName = config.generator_model || 'gemma2:2b';
      temperature = config.temperature_generator !== undefined ? config.temperature_generator : 0.7;
      break;
    case 'solver':
      modelName = config.solver_model || 'deepseek-r1:7b';
      temperature = config.temperature_solver !== undefined ? config.temperature_solver : 0.1;
      break;
    case 'verifier':
      modelName = config.verifier_model || 'llama3.1:8b';
      temperature = config.temperature_verifier !== undefined ? config.temperature_verifier : 0.1;
      break;
    case 'expander':
      modelName = config.expander_model || 'gemma2:2b';
      temperature = 0.4;
      break;
    case 'fast_checker':
      modelName = config.fast_checker_model || 'gemma2:2b';
      temperature = 0.1;
      break;
    case 'auxiliary_solver':
      modelName = config.auxiliary_solver_model || 'gemma2:2b';
      temperature = 0.1;
      break;
    default:
      modelName = 'gemma2:2b';
      temperature = 0.5;
  }

  // Safe check: If target model is not yet installed, fallback to currently active installed models
  try {
    const baseUrl = config.ollama_base_url || 'http://localhost:11434';
    const tagRes = await fetch(`${baseUrl}/api/tags`);
    if (tagRes.ok) {
      const tagData = await tagRes.json();
      const installed = (tagData.models || []).map(m => m.name);
      const isAvailable = installed.some(name => name.includes(modelName) || modelName.includes(name));
      if (!isAvailable && installed.length > 0) {
        // Fallback to active installed models
        if (installed.some(n => n.includes('gemma2:2b'))) {
          modelName = 'gemma2:2b';
        } else if (installed.some(n => n.includes('qwen2.5:7b'))) {
          modelName = 'qwen2.5:7b';
        } else {
          modelName = installed[0];
        }
      }
    }
  } catch (e) {}

  return await callOllamaChat(modelName, [systemMessage, userMessage], { temperature, ...callOptions });
}

// Generate text embedding vector via Ollama or Gemini
async function getEmbedding(text) {
  const config = getConfig();
  const apiKey = config.gemini_api_key || process.env.GEMINI_API_KEY || config.fallback_llm_api_key;

  // Try Gemini embedding if key exists
  if (apiKey) {
    try {
      const embModel = config.gemini_embedding_model || 'gemini-embedding-001';
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${embModel}:embedContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: { parts: [{ text }] }
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.embedding?.values) {
          return data.embedding.values;
        }
      }
    } catch (e) {}
  }

  // Fallback to Ollama
  const baseUrl = config.ollama_base_url || 'http://localhost:11434';
  const model = config.embedding_model || 'nomic-embed-text';

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(`${baseUrl}/api/embeddings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        prompt: text,
        keep_alive: '0m'
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Ollama embedding HTTP ${res.status}`);
    }
    const data = await res.json();
    return data.embedding || null;
  } catch (err) {
    return null;
  }
}

module.exports = {
  checkOllamaHealth,
  checkProviderHealth,
  callOllamaChat,
  callGeminiChat,
  generateWithRole,
  getEmbedding,
  getConfig,
  safeParseJson
};


