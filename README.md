# mw-node-qunit

A QUnit test runner for node, that adds some mediawiki specific things.

```
npm install -g mw-node-qunit
mw-node-qunit tests/*.js
# Or for cross-shell and OS glob support
mw-node-qunit 'tests/**/*.js'
```

The output for the tests is in [TAP](https://testanything.org/) format, which
is pretty basic, if you want pretty output, here is a [list of
reporters](https://github.com/sindresorhus/awesome-tap#reporters) you can
install to prettify output. Example:

```
npm install -g tap-dot
mw-node-qunit tests/*.js | tap-dot
```

If you want to run tests on watch, use `nodemon` for example:

```
npm install -g nodemon
nodemon -w src -w tests --exec "mw-node-qunit tests/*.js | tap-dot"
```

## Testing with QUnit

This test runner will add QUnit, mediaWiki globals, and a jsdom window object
and jquery initialized as `window`, `document`, and `jQuery` in the global
scope so you can run your tests assuming those will be present.

It also adds a sinon sandbox to the `this` scope on a test as `this.sandbox`
that is automatically created and restored before and after every test, so you
can spy/stub things in `beforeEach` or in the tests without worrying about
having to manually restoring them after the test.
