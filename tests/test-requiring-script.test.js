'use strict';

QUnit.module( 'Require script that uses globals', {
	beforeEach() {
		require( './script' );
	},
	afterEach() {
		delete mediaWiki.testNamespace;
	}
} );

QUnit.test( 'Can use the things created in the required script', ( assert ) => {
	assert.equal( mediaWiki.testNamespace.add( 1, 2 ), 3 );
} );
