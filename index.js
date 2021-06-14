'use strict';

const dom = require( './src/dom' ),
	jQuery = require( './src/jQuery' ),
	mw = require( './src/mw' ),
	sinon = require( 'sinon' ),
	oojs = require( './src/oo' ),
	mustache = require( './src/mustache' );

module.exports = {
	dom, jQuery, mw, mustache, oojs, sinon,
	setUp: function ( useSandbox = true ) {
		const sandbox = useSandbox ? sinon.createSandbox() : null;

		dom.setUp( sandbox, global );
		jQuery.setUp( sandbox, global );
		mw.setUp( sandbox, global );
		global.mediaWiki = global.mw;
		global.jQuery = global.$;
		return useSandbox ? sandbox :
			{ mw: global.mw, $: global.$ };
	}
};
