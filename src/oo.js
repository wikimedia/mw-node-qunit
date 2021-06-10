const headless = typeof window !== 'object';

module.exports = {
	/**
	 * @param {sinon.SinonSandbox} [sandbox]
	 * @param {NodeJS.Global} global
	 * @return {void}
	 */
	setUp: function ( sandbox, global ) {
		let OO;
		if ( !sandbox || headless ) {
			OO = require( 'oojs' );
			OO.ui = {
				Element: {
					static: {
						getClosestScrollableContainer: function () {}
					}
				},
				Tool: function () {}
			};
			global.OO = OO || undefined;
			if ( sandbox ) {
				sandbox.stub( global, 'OO' ).callsFake( () => OO );
			}
		}
	}
};
