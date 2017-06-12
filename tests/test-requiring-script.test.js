QUnit.module('Require script that uses globals', {
  before() {
    require('./script');
  },
  after() {
    delete mw.testNamespace;
  }
});
