# mw-node-qunit

A QUnit test runner for node, that adds some mediawiki specific things.

```
npm install -g mw-node-qunit
mw-node-qunit tests/*.js
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
nodemon --exec "mw-node-qunit tests/*.js | tap-dot"
```
