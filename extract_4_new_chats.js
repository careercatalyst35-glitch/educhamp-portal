const fs = require('fs');
const path = require('path');

const newLinks = [
  {
    id: 9,
    url: 'https://chatgpt.com/share/6acf7077-8cb4-83ec-b854-a56bdab0ea18',
    localFile: 'C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/4016/content.md'
  },
  {
    id: 10,
    url: 'https://chatgpt.com/share/6acf7092-c058-83ee-84df-efbbeedf7d83',
    localFile: 'C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/4018/content.md'
  },
  {
    id: 11,
    url: 'https://chatgpt.com/share/6acf70b1-7c20-83e8-be20-f18d54773907',
    localFile: 'C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/4020/content.md'
  },
  {
    id: 12,
    url: 'https://chatgpt.com/share/6acf70c0-52d8-83ec-89e3-e7ab61030d41',
    localFile: 'C:/Users/25car/.gemini/antigravity/brain/576231d8-6ff3-4005-81c9-c8f9969277f8/.system_generated/steps/4022/content.md'
  }
];

const outDir = path.join(__dirname, 'raw_chats');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function extractFromHtml(html, id) {
  const titleMatch = html.match(/<title>ChatGPT - (.*?)<\/title>/i) || html.match(/<title>(.*?)<\/title>/i);
  let title = titleMatch ? titleMatch[1].replace(/ChatGPT\s*-\s*/i, '').trim() : `Chat_${id}`;
  
  const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/g) || [];
  let fullContent = '';
  
  for (const s of scripts) {
    if (s.includes('streamController.enqueue')) {
      const m = s.match(/streamController\.enqueue\(([\s\S]*?)\);\s*<\/script>/);
      if (m) {
        try {
          const raw = JSON.parse(m[1]);
          const inner = typeof raw === 'string' ? JSON.parse(raw) : raw;
          if (Array.isArray(inner)) {
            const textParts = [];
            inner.forEach(val => {
              if (typeof val === 'string' && val.length > 30 && (val.includes('**Q') || val.includes('Question') || val.includes('##') || val.includes('(a)') || val.includes('(A)') || val.includes('Calculate') || val.includes('Diagram') || val.includes('<svg') || val.includes('Correct Answer'))) {
                textParts.push(val);
              }
            });
            if (textParts.length > 0) {
              fullContent = textParts.join('\n\n---\n\n');
            }
          }
        } catch (err) {
          console.error(`Error parsing stream for ${id}:`, err.message);
        }
      }
    }
  }

  return { title, fullContent };
}

newLinks.forEach(item => {
  console.log(`Processing link ${item.id}: ${item.url}...`);
  if (!fs.existsSync(item.localFile)) {
    console.error(`Local file ${item.localFile} not found!`);
    return;
  }
  const html = fs.readFileSync(item.localFile, 'utf8');
  const { title, fullContent } = extractFromHtml(html, item.id);
  console.log(` -> Title: "${title}", Extracted content length: ${fullContent.length}`);
  
  const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').substring(0, 50);
  const outPath = path.join(outDir, `chat_${item.id}_${cleanTitle}.md`);
  fs.writeFileSync(outPath, fullContent || html, 'utf8');
  console.log(` -> Saved to ${outPath}\n`);
});
