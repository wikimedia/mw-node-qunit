#!/usr/bin/env node

'use strict';

const mwNodeQunit = require( './index.js' );

require( 'qunit/bin/qunit' );

if ( process.env.GLOBALS ) {
	mwNodeQunit.setUp();
}
