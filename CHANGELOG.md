# 7.0.0
* Drop Node 12 support
* build: Upgrade eslint config to 0.22.1, move to devDependencies

# 6.4.1
* mw.Uri: Implement working mock `toString()`
* mw.util: Add mocks of `showPortlet()` and `addPortletLink()`

# 6.4.0
* add mock for mw.hook().add()
* Update CHANGELOG

# 6.3.0
* Drop Node 10 support
* Update dependencies
* Update eslint-config-wikimedia to 0.20.0
* Add CI (npm test) (#14)

# 6.2.1
* Remove unused dependencies
* Replace prettier with ESLint

# 6.2.0
* Make sandboxes optional
* Expand support for mw.Uri
* Run npm audit, drop tap dot
* Mock mediawiki messages can be escaped

# 6.1.1
* Bump jquery from 3.3.1 to 3.4.0

# 6.1.0
* Update mw-node-qunit tests
* Add mw.user.tokens to mockMediaWiki

# 6.0.0
* Mock trackSubscribe
* Support stubbing mw.template.get().render()
* Doc: update package.json URLs

# 5.0.0

* Breaking: use org scoped packaging

# 4.0.0

* Rely on the CLI runner from qunit
* Fix testing require and global mediaWiki not asserting anything

# 3.1.0

* Added CONTRIBUTING.md
* Update jsdom from 11.3.0 to 11.7.0
* Upgrade jQuery from 3.2.1 to 3.3.1
* Update QUnit from 2.4.1 to 2.6.0
* Update prettier, fix formatting glob

# 3.0.0

* Sinon upgraded to 4.1.2. There are major changes to the `sandbox` exposed so
  check the migration guides from sinon to update your tests.
  * http://sinonjs.org/guides/migrating-to-3.0
  * http://sinonjs.org/guides/migrating-to-4.0
  * https://github.com/sinonjs/sinon/blob/master/History.md#411--2017-11-03

# 2.2.0

* Upgrade sinon to 2.4.1
* Update qunit to 2.4.1
* Update jsdom to 11.3.0
* Update prettier to 1.8.2 and reformat code

# 2.1.0

* Fix sinon.getConfig deprecation warnings in runner
* Add glob support in cli arguments

# 2.0.0

* Upgrade Sinon major to 2.x

# 1.1.0

* Upgrade QUnit, jQuery and JSDOM
