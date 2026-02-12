const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;
function test(name, fn) { try { fn(); passed++; } catch (e) { console.error(`FAIL: ${name} - ${e.message}`); failed++; } }
function assert(condition, msg) { if (!condition) throw new Error(msg || 'Assertion failed'); }

const config = require(path.join(__dirname, '..', 'jest.config.js'));
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

test('jest is 28.x', () => assert(pkg.devDependencies.jest.startsWith('28')));
test('testEnvironment is node', () => assert(config.testEnvironment === 'node'));
test('has fakeTimers config', () => assert(config.fakeTimers && config.fakeTimers.legacyFakeTimers === true));
test('has snapshotFormat', () => assert(config.snapshotFormat && config.snapshotFormat.escapeString === true));
test('has coverageThresholds', () => assert(config.coverageThresholds));
test('10 source modules', () => {
  const srcDir = path.join(__dirname, '..', 'src');
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));
  assert(files.length === 10, `Expected 10, got ${files.length}`);
});
test('20 test files', () => {
  const testDir = path.join(__dirname, '..', 'src', '__tests__');
  const files = fs.readdirSync(testDir).filter(f => f.endsWith('.test.js'));
  assert(files.length === 20, `Expected 20, got ${files.length}`);
});
test('has roots config', () => assert(config.roots && config.roots.length > 0));

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
