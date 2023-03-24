'use strict';

QUnit.module( 'Deeply nested test' );

QUnit.test( 'Glob should parse and this test be run', ( assert ) => {
	// eslint-disable-next-line qunit/no-loose-assertions
	assert.ok( 'Run' );
} );
