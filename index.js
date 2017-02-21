#!/usr/bin/env node

var path = require('path');
var QUnit = require('qunitjs');
var jsdom = require('jsdom');
var sinon = require('sinon');
var reporter = require('qunit-tap');
var QUnitModule;

// Set up QUnit reporter logging
reporter(QUnit, function() {
  console.log.apply(console, arguments);
});

// When a test() indicates asynchronicity with stop(),
// allow 3 seconds to pass before killing the test(),
// and assuming failure.
QUnit.config.testTimeout = 3000;

// Don't auto start running the tests, we'll start them below
QUnit.config.autostart = false;
// Don't re-order tests.
QUnit.config.reorder = false;
// Run tests serially, not in parallel.
QUnit.config.autorun = false;

sinon.config = {
  injectIntoThis: true,
  injectInto: null,
  useFakeTimers: false,
  useFakeServer: false,
  properties: ['spy', 'stub', 'mock', 'sandbox']
};

// Override Qunit.module to set up a sinon sandbox automatically
QUnitModule = QUnit.module;
QUnit.module = function(name, localEnv) {
  localEnv = localEnv || {};
  QUnitModule(name, {
    beforeEach: function() {
      var config = sinon.getConfig(sinon.config);
      config.injectInto = this;
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
global.QUnit = QUnit;

process.argv.slice(2).forEach(file => require(path.resolve(file)));

QUnit.start();

// Set up the global environment with mediaWiki, QUnit, $ and a jsdom dom
function setDOMEnvironment() {
  var document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.document = global.window.document;
  // No need to pass window to the required module given it is in the global
  // and will pick it up
  global.jQuery = global.$ = window.jQuery = window.$ = require('jquery');
}
