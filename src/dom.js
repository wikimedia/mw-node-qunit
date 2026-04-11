'use strict';

const
	headless = typeof window !== 'object';

module.exports = {
	/**
	 * @param {sinon.SinonSandbox} [sandbox]
	 * @param {NodeJS.Global} global
	 * @return {void}
	 */
	setUp: function ( sandbox, global ) {
		if ( !sandbox || headless ) {
			const jsdom = require( 'jsdom' ),
				window = new jsdom.JSDOM().window,
				document = window.document;

			global.window = window || undefined;
			global.document = document || undefined;
			if ( sandbox ) {
				sandbox.stub( global, 'window' ).callsFake( () => window );
				sandbox.stub( global, 'document' ).callsFake( () => document );
			}
			global.Image = global.window.Image;
			global.Event = global.window.Event;
			// Before Node 21 we could just do global.navigator = global.window.navigator; but
			// as an otherwise-undefined global Node's navigator API exists, implemented as an
			// accessor with other a getter, so causes breakage.
			Object.defineProperty(
				global,
				'navigator',
				{
					value: global.window.navigator,
					writable: true,
					configurable: true
				}
			);
		}
	}
};
