const fs = require('fs');
const path = require('path');

const cacheFile = path.join(__dirname, 'registry_cache.json');
if (fs.existsSync(cacheFile)) {
  const data = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  const oldCount = (data.questions || []).length;
  data.questions = [];
  fs.writeFileSync(cacheFile, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Successfully cleared all ${oldCount} questions from registry_cache.json. Questions count is now 0.`);
} else {
  console.log('registry_cache.json not found.');
}
