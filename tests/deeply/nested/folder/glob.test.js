'use strict';

QUnit.module( 'Deeply nested test' );

QUnit.test( 'Glob should parse and this test be run', ( assert ) => {
	assert.ok( 'Run' );
} );
