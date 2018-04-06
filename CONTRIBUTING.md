# Contributing

## Reporting bugs

Please open an issue on the github repo.

## Improvements, additions or removal of features

Please discuss with the maintainers by opening an issue in the github repo,
before spending time submitting a PR! It may save you time in the long run.

## Maintenance

### Releasing

Always run `npm test` and test the tool with a real repository before releasing.

* Inspect the git log to check the changes since the last release:
  * `` git log `git describe --tags --abbrev=0` ..HEAD --oneline ``
* Copy the changes and add them to `CHANGELOG.md`
  * Commit them
* Make the new version and publish it:
  * `npm version <version-type:major|minor|patch> && g ps && g ps --tags && npm publish`

### Updating dependencies

* Run `npm outdated`
* Pick a dependency
  * Take the minor or patch versions first
* Check the changelog, history, release notes or blog
  * Copy the changes
* `npm update <library>@<version>`
* Git add package.json and package-lock.json
* Commit with the subject `Upgrade <lib> from <version> to <new-version>`
* Add the changelog you copied to the commit message
* If it was minor, and there are more minor deps then:
  * Back to start, pick the next dependency
* If it was the last minor change:
  * Release a minor version of mw-node-qunit (see _Release_ section)
  * Back to start, pick the next dependency
* If it was a major, and there are more major deps, then:
  * Back to start, pick the next dependency
* If it was the last major change:
  * Release a major version of mw-node-qunit (see _Release_ section)
  * Back to start, pick the next dependency
