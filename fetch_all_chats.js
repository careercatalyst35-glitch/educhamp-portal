const fs = require('fs');
const path = require('path');

const urls = [
  { id: 1, url: 'https://chatgpt.com/share/6acf5b54-9698-83ee-b2d9-1ebd53fae1a6' },
  { id: 2, url: 'https://chatgpt.com/share/6acf5b65-9b40-83e8-b911-18f4b9b67fa5' },
  { id: 3, url: 'https://chatgpt.com/share/6acf5b8b-6200-83e8-b6fe-84d506cf3fce' },
  { id: 4, url: 'https://chatgpt.com/share/6acf5b9c-b778-83e8-b1b2-c1d782347655' },
  { id: 5, url: 'https://chatgpt.com/share/6acf5bad-84d4-83e8-bf78-e5bb738f9cec' },
  { id: 6, url: 'https://chatgpt.com/share/6acf5bc6-c1a4-83ee-95c3-fd15b56bd849' },
  { id: 7, url: 'https://chatgpt.com/share/6acf5be4-7b20-83ec-917a-aca4b1cb58a9' },
  { id: 8, url: 'https://chatgpt.com/share/6acf5bff-b9e4-83ec-9610-c06311e943a2' }
];

const outDir = path.join(__dirname, 'raw_chats');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function run() {
  for (const item of urls) {
    console.log(`Fetching ${item.id}: ${item.url}...`);
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      const titleMatch = html.match(/<title>ChatGPT - (.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'Unknown';
      console.log(` -> Title: "${title}", HTML length: ${html.length}`);

      // Extract conversation stream
      const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/g) || [];
      let fullContent = '';
      for (const s of scripts) {
        if (s.includes('streamController.enqueue')) {
          const m = s.match(/streamController\.enqueue\(([\s\S]*?)\);\s*<\/script>/);
          if (m) {
            try {
              const raw = JSON.parse(m[1]);
              const inner = typeof raw === 'string' ? JSON.parse(raw) : raw;
              // Collect text strings that look like markdown/questions
              const textParts = [];
              inner.forEach(val => {
                if (typeof val === 'string' && val.length > 30 && (val.includes('**Q') || val.includes('Question') || val.includes('##') || val.includes('(a)') || val.includes('(A)') || val.includes('Calculate') || val.includes('Diagram'))) {
                  textParts.push(val);
                }
              });
              fullContent = textParts.join('\n\n---\n\n');
            } catch (err) {
              console.error(`Error parsing stream for ${item.id}:`, err.message);
            }
          }
        }
      }

      fs.writeFileSync(path.join(outDir, `chat_${item.id}_${title.replace(/[^a-z0-9]/gi, '_')}.md`), fullContent || html);
      console.log(` Saved chat_${item.id} with ${fullContent.length} chars text.\n`);
    } catch (e) {
      console.error(`Failed ${item.id}:`, e.message);
    }
  }
}

run();
