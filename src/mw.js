'use strict';

const
	headless = typeof window !== 'object',
	newMockMediaWiki = require( './mockMediaWiki' );

module.exports = {
	/**
	 * @param {sinon.SinonSandbox} sandbox
	 * @param {NodeJS.Global} global
	 * @return {void}
	 */
	setUp: function ( sandbox, global ) {
		const mw = newMockMediaWiki();
		if ( !sandbox || headless ) {
			global.mw = mw || undefined;

			if ( sandbox ) {
				sandbox.stub( global, 'mw' ).callsFake( () => mw );
			}
		}
	}
};
