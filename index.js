#!/usr/bin/env node

var path = require("path");

var setupScript = path.resolve(__dirname, "./wikimedia-setup.js");

// Insert our wikimedia setup script in the arguments array before calling the
// qunit CLI
process.argv.splice(2, 0, "--require", setupScript);

require("qunit/bin/qunit");
