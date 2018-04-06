var jsdom = require("jsdom");
var sinon = require("sinon");

// When a test() indicates asynchronicity with stop(),
// allow 3 seconds to pass before killing the test(),
// and assuming failure.
QUnit.config.testTimeout = 3000;

sinon.config = {
  injectIntoThis: true,
  injectInto: null,
  useFakeTimers: false,
  useFakeServer: false,
  properties: ["spy", "stub", "mock", "sandbox"]
};

// Override Qunit.module to set up a sinon sandbox automatically
var QUnitModule = QUnit.module;
QUnit.module = function(name, localEnv) {
  localEnv = localEnv || {};
  QUnitModule(name, {
    beforeEach: function() {
      var config = Object.assign({}, sinon.config, {
        injectInto: this
      });
      sinon.sandbox.create(config);

      // Interop with old setup config on mediawiki codebases
      if (localEnv.setup) {
        localEnv.setup.call(this);
      }
      if (localEnv.beforeEach) {
        localEnv.beforeEach.call(this);
      }
    },
    afterEach: function() {
      // Interop with old teardown config on mediawiki codebases
      if (localEnv.teardown) {
        localEnv.teardown.call(this);
      }
      if (localEnv.afterEach) {
        localEnv.afterEach.call(this);
      }

      this.sandbox.restore();
    }
  });
};

setDOMEnvironment();
global.mediaWiki = window.mediaWiki = {};

// Set up the global environment with mediaWiki, QUnit, $ and a jsdom dom
function setDOMEnvironment() {
  var dom = new jsdom.JSDOM("<!doctype html><html><body></body></html>");
  global.window = dom.window;
  global.document = global.window.document;
  // No need to pass window to the required module given it is in the global
  // and will pick it up
  global.jQuery = global.$ = window.jQuery = window.$ = require("jquery");
}
