QUnit.module('Globals');

QUnit.test('mediaWiki global is defined', function(assert) {
  assert.equal(typeof mediaWiki, 'object');
});
QUnit.test('QUnit global is defined', function(assert) {
  assert.equal(typeof QUnit, 'object');
});
QUnit.test('window global is defined', function(assert) {
  assert.equal(typeof window, 'object');
});
QUnit.test('document global is defined', function(assert) {
  assert.equal(typeof document, 'object');
});
QUnit.test('jQuery global is defined', function(assert) {
  assert.equal(typeof jQuery, 'function');
});

QUnit.module('QUnit patching', {
  setup() {
    this.setup = true;
  }
});

QUnit.test('setup and teardown methods are patched to work', function(assert) {
  assert.equal(this.setup, true, 'setup hook was run');
});
QUnit.test('a sinon sandbox is added to this.sandbox', function(assert) {
  assert.equal(typeof this.sandbox, 'object', 'sandbox is created');
  assert.equal(
    typeof this.sandbox.spy,
    'function',
    'sandbox methods are present'
  );
  assert.equal(
    typeof this.sandbox.stub,
    'function',
    'sandbox methods are present'
  );
});

QUnit.module('A test that uses the DOM', {
  beforeEach() {
    this.el = $('<div id="test"/>').text('banana').append(window.document.body);
  },
  afterEach() {
    this.el.remove();
  }
});

QUnit.test('setting an element on the DOM works', function(assert) {
  assert.equal(this.el.text(), 'banana', 'text was set on the dom properly');
});
