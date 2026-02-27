module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js', '!src/**/__tests__/**'],
  coverageThresholds: { global: { branches: 80, functions: 80, lines: 80, statements: 80 } },
  fakeTimers: { enableGlobally: false, legacyFakeTimers: true },
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
  verbose: true,
  testTimeout: 10000,
};
