module.exports = {
  verbose: false,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  reporters: [
    '../lib/jest-dot-reporter.js' // replace this line with 'jest-dot-reporter.js' in your real world config
  ]
};
