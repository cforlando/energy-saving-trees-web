exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'form-test.js',
    'footer-test.js',
    'navbar-test.js',
    'site-test.js'
  ],
  capabilities: {
    'browserName': 'firefox'
  }
};