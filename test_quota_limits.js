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
  console.log('--- Step 1: Query initial vault stats for Force ---');
  let res = await request({ host: 'localhost', port: 8080, path: '/api/generator/vault-stats?chapter=Force&className=Class%2010', method: 'GET' });
  console.log('Limits:', res.body.stats.limits);
  console.log('Already generated:', res.body.stats.alreadyGenerated);
  console.log('Remaining allowed:', res.body.stats.remainingAllowed);

  console.log('\n--- Step 2: Attempt generating 31 diagrammatic questions (exceeds cap of 30) ---');
  let failRes = await request({
    host: 'localhost',
    port: 8080,
    path: '/api/generator/store-from-vault',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    chapter: 'Force',
    className: 'Class 10',
    diagramCount: 31
  });
  console.log('Success:', failRes.body.success, '| Message:', failRes.body.message);

  console.log('\n--- Step 3: Generate 25 diagrammatic questions (allowed) ---');
  let gen25 = await request({
    host: 'localhost',
    port: 8080,
    path: '/api/generator/store-from-vault',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    chapter: 'Force',
    className: 'Class 10',
    diagramCount: 25
  });
  console.log('Success:', gen25.body.success, '| Saved:', gen25.body.savedCount);

  console.log('\n--- Step 4: Check stats after 25 generated ---');
  res = await request({ host: 'localhost', port: 8080, path: '/api/generator/vault-stats?chapter=Force&className=Class%2010', method: 'GET' });
  console.log('Already generated diagrammatic:', res.body.stats.alreadyGenerated.diagrammatic);
  console.log('Remaining allowed diagrammatic:', res.body.stats.remainingAllowed.diagrammatic);

  console.log('\n--- Step 5: Try generating 10 diagrammatic questions (only 5 allowed) ---');
  let failRes2 = await request({
    host: 'localhost',
    port: 8080,
    path: '/api/generator/store-from-vault',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    chapter: 'Force',
    className: 'Class 10',
    diagramCount: 10
  });
  console.log('Success:', failRes2.body.success, '| Message:', failRes2.body.message);

  console.log('\n--- Step 6: Generate remaining 5 diagrammatic questions ---');
  let gen5 = await request({
    host: 'localhost',
    port: 8080,
    path: '/api/generator/store-from-vault',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    chapter: 'Force',
    className: 'Class 10',
    diagramCount: 5
  });
  console.log('Success:', gen5.body.success, '| Saved:', gen5.body.savedCount);

  console.log('\n--- Step 7: Check stats after 30 generated (CAP REACHED) ---');
  res = await request({ host: 'localhost', port: 8080, path: '/api/generator/vault-stats?chapter=Force&className=Class%2010', method: 'GET' });
  console.log('Already generated diagrammatic:', res.body.stats.alreadyGenerated.diagrammatic, '/ 30');
  console.log('Remaining allowed diagrammatic:', res.body.stats.remainingAllowed.diagrammatic);
  console.log('Is diagrammatic capped:', res.body.stats.isCapped.diagrammatic);

  console.log('\n--- Step 8: Try generating 1 more diagrammatic question when cap reached ---');
  let failRes3 = await request({
    host: 'localhost',
    port: 8080,
    path: '/api/generator/store-from-vault',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, {
    chapter: 'Force',
    className: 'Class 10',
    diagramCount: 1
  });
  console.log('Success:', failRes3.body.success, '| Message:', failRes3.body.message);

  console.log('\n--- Step 9: Reset database to 0 questions ---');
  let clearRes = await request({ host: 'localhost', port: 8080, path: '/api/questions/clear-all', method: 'POST' });
  console.log('Reset response:', clearRes.body.message);
}

run();
