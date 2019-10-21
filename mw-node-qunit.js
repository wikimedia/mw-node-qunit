#!/usr/bin/env node
const mwNodeQunit = require( './index.js' );

require( 'qunit/bin/qunit' );

if ( process.argv.includes( '--globals' ) ) {
    mwNodeQunit.setUp();
}
