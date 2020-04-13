const dom = require( './src/dom' ),
	jQuery = require( './src/jQuery' ),
	mw = require( './src/mw' ),
	sinon = require( 'sinon' ),
	oojs = require( './src/oo' ),
	mustache = require( './src/mustache' );

module.exports = {
	dom, jQuery, mw, mustache, oojs, sinon,
	setUp: function () {
		const sandbox = sinon.sandbox.create();

		dom.setUp( sandbox, global );
		jQuery.setUp( sandbox, global );
		mw.setUp( sandbox, global );
		global.mediaWiki = global.mw;
		global.jQuery = global.$;
		return sandbox;
	}
};
