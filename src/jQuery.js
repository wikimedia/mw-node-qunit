'use strict';

const headless = typeof window !== 'object';

module.exports = {
	/**
	 * @param {sinon.SinonSandbox} [sandbox]
	 * @param {NodeJS.Global} global
	 * @return {void}
	 */
	setUp: function ( sandbox, global ) {
		if ( !sandbox || headless ) {
			const $ = require( 'jquery' );
			global.$ = $ || undefined;
			if ( sandbox ) {
				sandbox.stub( global, '$' ).callsFake( $ );
			}
		}
	},
	tearDown: function () {
		if ( headless ) {
			// prevent jQuery from caching the global window object.
			delete require.cache[ require.resolve( 'jquery' ) ];
		}
	}
};
