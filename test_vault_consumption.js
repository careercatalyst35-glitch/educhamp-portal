const http = require('http');

function request(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(typeof data === 'string' ? data : JSON.stringify(data));
    req.end();
  });
}

async function run() {
  console.log('--- Step 1: Check initial database questions count ---');
  let qRes = await request({ host: 'localhost', port: 8080, path: '/api/data/questions', method: 'GET' });
  console.log('Database questions count:', (qRes.body.data || []).length);

  console.log('\n--- Step 2: Check Machines vault stats before generation ---');
  let statsBefore = await request({ host: 'localhost', port: 8080, path: '/api/generator/vault-stats?chapter=Machines', method: 'GET' });
  console.log('Vault total before:', statsBefore.body.stats.total);

  console.log('\n--- Step 3: Generate 4 questions (2 diagram, 2 numerical) ---');
  let genRes = await request({
    host: 'localhost',
    port: 8080,
    path: '/api/generator/store-from-vault',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    chapter: 'Machines',
    className: 'Class 10',
    subjectName: 'Science',
    subSubjectName: 'Physics',
    boardName: 'ICSE',
    sectionName: 'Subjective',
    diagramCount: 2,
    numericalCount: 2
  });
  console.log('Store response success:', genRes.body.success, '| Saved count:', genRes.body.savedCount);
  console.log('Remaining in vault reported by store:', genRes.body.totalAvailableInVault);

  console.log('\n--- Step 4: Verify questions in database ---');
  qRes = await request({ host: 'localhost', port: 8080, path: '/api/data/questions', method: 'GET' });
  console.log('Database questions count now:', (qRes.body.data || []).length);

  console.log('\n--- Step 5: Check Machines vault stats after generation ---');
  let statsAfter = await request({ host: 'localhost', port: 8080, path: '/api/generator/vault-stats?chapter=Machines', method: 'GET' });
  console.log('Vault total after:', statsAfter.body.stats.total);

  if (statsAfter.body.stats.total === statsBefore.body.stats.total - 4) {
    console.log('>>> SUCCESS: Exactly 4 questions were consumed from the hidden vault!');
  } else {
    console.log('>>> FAILED: Vault count mismatch');
  }

  console.log('\n--- Step 6: Clear all questions from database ---');
  let clearRes = await request({ host: 'localhost', port: 8080, path: '/api/questions/clear-all', method: 'POST' });
  console.log('Clear response:', clearRes.body.message);
  qRes = await request({ host: 'localhost', port: 8080, path: '/api/data/questions', method: 'GET' });
  console.log('Final database questions count:', (qRes.body.data || []).length);
}

run();
