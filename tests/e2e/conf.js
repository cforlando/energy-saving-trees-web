exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'footer-test.js',
    'navbar-test.js',
    'site-test.js'
  ],
  capabilities: {
    'browserName': 'firefox'
  }
};