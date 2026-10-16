const http = require('http');

function post(path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request({
      hostname: 'localhost',
      port: 8080,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(raw) });
        } catch (e) {
          resolve({ status: res.statusCode, raw });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function get(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:8080${path}`, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(raw) });
        } catch (e) {
          resolve({ status: res.statusCode, raw });
        }
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE LIMIT TESTS ---');
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      passed++;
    } else {
      console.error(`[FAIL] ${message}`);
      failed++;
    }
  }

  // 1. Vault stats limits test for Subjective
  const resSubjStats = await get('/api/generator/vault-stats?chapter=Force&subjectName=Science&className=Class%2010&sectionName=Subjective');
  assert(resSubjStats.status === 200, 'Subjective vault-stats returns 200');
  const subjLimits = resSubjStats.body.stats?.limits || {};
  assert(subjLimits.diagrammatic === 30, `Subjective limit diagrammatic is 30 (got ${subjLimits.diagrammatic})`);
  assert(subjLimits.numerical === 30, `Subjective limit numerical is 30 (got ${subjLimits.numerical})`);
  assert(subjLimits.theoretical === 20, `Subjective limit theoretical is 20 (got ${subjLimits.theoretical})`);
  assert(subjLimits.complex === 20, `Subjective limit complex is 20 (got ${subjLimits.complex})`);
  assert(subjLimits.total === 100, `Subjective limit total is 100 (got ${subjLimits.total})`);

  // 2. Vault stats limits test for AR
  const resArStats = await get('/api/generator/vault-stats?chapter=Force&subjectName=Science&className=Class%2010&sectionName=Assertion%20Reasoning');
  assert(resArStats.status === 200, 'AR vault-stats returns 200');
  assert(resArStats.body.stats?.limit === 30, `AR limit is 30 (got ${resArStats.body.stats?.limit})`);

  // 3. Vault stats limits test for Case Based
  const resCaseStats = await get('/api/generator/vault-stats?chapter=Force&subjectName=Science&className=Class%2010&sectionName=Case%20Based%20Studies');
  assert(resCaseStats.status === 200, 'Case-based vault-stats returns 200');
  assert(resCaseStats.body.stats?.limit === 50, `Case-based limit is 50 (got ${resCaseStats.body.stats?.limit})`);

  // 4. Vault stats limits test for HOTS
  const resHotsStats = await get('/api/generator/vault-stats?chapter=Force&subjectName=Science&className=Class%2010&sectionName=HOTS');
  assert(resHotsStats.status === 200, 'HOTS vault-stats returns 200');
  assert(resHotsStats.body.stats?.limit === 20, `HOTS limit is 20 (got ${resHotsStats.body.stats?.limit})`);

  // 5. Store from vault over-limit rejection test for HOTS
  const hotsOver = await post('/api/generator/store-from-vault', {
    chapter: 'Force',
    className: 'Class 10',
    subjectName: 'Science',
    sectionName: 'HOTS',
    count: 21
  });
  assert(hotsOver.body?.success === false, 'HOTS count=21 is rejected by store-from-vault');
  assert(hotsOver.body?.message?.includes('Limit is 20'), `HOTS rejection message notes limit is 20 (got: ${hotsOver.body?.message})`);

  // 6. Store from vault over-limit rejection test for AR
  const arOver = await post('/api/generator/store-from-vault', {
    chapter: 'Force',
    className: 'Class 10',
    subjectName: 'Science',
    sectionName: 'Assertion Reasoning',
    count: 31
  });
  assert(arOver.body?.success === false, 'AR count=31 is rejected by store-from-vault');
  assert(arOver.body?.message?.includes('Limit is 30'), `AR rejection message notes limit is 30 (got: ${arOver.body?.message})`);

  // 7. Store from vault over-limit rejection test for Case Based
  const caseOver = await post('/api/generator/store-from-vault', {
    chapter: 'Force',
    className: 'Class 10',
    subjectName: 'Science',
    sectionName: 'Case Based Studies',
    count: 51
  });
  assert(caseOver.body?.success === false, 'Case Based count=51 is rejected by store-from-vault');
  assert(caseOver.body?.message?.includes('Limit is 50'), `Case Based rejection message notes limit is 50 (got: ${caseOver.body?.message})`);

  // 8. Store from vault over-limit rejection test for Subjective Diagrammatic (> 30)
  const subjDiagOver = await post('/api/generator/store-from-vault', {
    chapter: 'Force',
    className: 'Class 10',
    subjectName: 'Science',
    sectionName: 'Subjective',
    diagramCount: 31,
    numericalCount: 0,
    theoryCount: 0,
    complexCount: 0
  });
  assert(subjDiagOver.body?.success === false, 'Subjective diagramCount=31 is rejected');
  assert(subjDiagOver.body?.message?.includes('Limit is 30'), `Subjective diag rejection message notes limit is 30 (got: ${subjDiagOver.body?.message})`);

  // 9. Store from vault over-limit rejection test for Subjective Numerical (> 30)
  const subjNumOver = await post('/api/generator/store-from-vault', {
    chapter: 'Force',
    className: 'Class 10',
    subjectName: 'Science',
    sectionName: 'Subjective',
    diagramCount: 0,
    numericalCount: 31,
    theoryCount: 0,
    complexCount: 0
  });
  assert(subjNumOver.body?.success === false, 'Subjective numericalCount=31 is rejected');
  assert(subjNumOver.body?.message?.includes('Limit is 30'), `Subjective num rejection message notes limit is 30 (got: ${subjNumOver.body?.message})`);

  // 10. Store from vault over-limit rejection test for Subjective Theoretical (> 20)
  const subjTheoOver = await post('/api/generator/store-from-vault', {
    chapter: 'Force',
    className: 'Class 10',
    subjectName: 'Science',
    sectionName: 'Subjective',
    diagramCount: 0,
    numericalCount: 0,
    theoryCount: 21,
    complexCount: 0
  });
  assert(subjTheoOver.body?.success === false, 'Subjective theoryCount=21 is rejected');
  assert(subjTheoOver.body?.message?.includes('Limit is 20'), `Subjective theo rejection message notes limit is 20 (got: ${subjTheoOver.body?.message})`);

  // 11. Store from vault over-limit rejection test for Subjective Complex (> 20)
  const subjCompOver = await post('/api/generator/store-from-vault', {
    chapter: 'Force',
    className: 'Class 10',
    subjectName: 'Science',
    sectionName: 'Subjective',
    diagramCount: 0,
    numericalCount: 0,
    theoryCount: 0,
    complexCount: 21
  });
  assert(subjCompOver.body?.success === false, 'Subjective complexCount=21 is rejected');
  assert(subjCompOver.body?.message?.includes('Limit is 20'), `Subjective comp rejection message notes limit is 20 (got: ${subjCompOver.body?.message})`);

  console.log(`\nTESTS FINISHED: Passed: ${passed}, Failed: ${failed}`);
  if (failed > 0) process.exit(1);
}

runTests().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
