QUnit.module( 'Globals' );

QUnit.test( 'mediaWiki global is defined', function ( assert ) {
	assert.strictEqual( typeof mediaWiki, 'object' );
} );
QUnit.test( 'QUnit global is defined', function ( assert ) {
	assert.strictEqual( typeof QUnit, 'object' );
} );
QUnit.test( 'window global is defined', function ( assert ) {
	assert.strictEqual( typeof window, 'object' );
} );
QUnit.test( 'document global is defined', function ( assert ) {
	assert.strictEqual( typeof document, 'object' );
} );
QUnit.test( 'jQuery global is defined', function ( assert ) {
	assert.strictEqual( typeof jQuery, 'function' );
} );

QUnit.module( 'QUnit patching', {
	beforeEach() {
		this.setup = true;
	}
} );

QUnit.test( 'setup and teardown methods are patched to work', function ( assert ) {
	assert.strictEqual( this.setup, true, 'setup hook was run' );
} );

QUnit.module( 'A test that uses the DOM', {
	beforeEach() {
		this.$el = $( '<div>' )
			.attr( 'id', 'test' )
			.text( 'banana' )
			.append( window.document.body );
	},
	afterEach() {
		this.$el.remove();
	}
} );

QUnit.test( 'setting an element on the DOM works', function ( assert ) {
	assert.strictEqual( this.$el.text(), 'banana', 'text was set on the dom properly' );
} );
