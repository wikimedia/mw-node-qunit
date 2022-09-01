# Contributing

## Reporting bugs

Please open an issue on the github repo.

## Improvements, additions or removal of features

Please discuss with the maintainers by opening an issue in the github repo,
before spending time submitting a PR! It may save you time in the long run.

## Maintenance

### Releasing

Always run `npm test` and test the tool with a real repository before releasing.
Make sure you have called `git fetch origin --tags` before proceeding.

1.  Inspect the git log to check the changes since the last release:
    * `` git log `git describe --tags --abbrev=0` ..HEAD --oneline ``
1.  Copy the changes and add them to `CHANGELOG.md`
    1.  Commit them
1.  Make the new version and publish it:
    * `npm version <version-type:major|minor|patch> && git push && git push --tags && npm publish`

### Updating dependencies

1.  Run `npm outdated`
1.  Pick a dependency
    1.  Take the minor or patch versions first
1.  Check the changelog, history, release notes or blog
    1.  Copy the changes
1.  `npm update <library>@<version>`
1.  Git add package.json and package-lock.json
1.  Commit with the subject `Upgrade <lib> from <version> to <new-version>`
1.  Add the changelog you copied to the commit message
1.  If it was minor, and there are more minor deps then:
    1.  Back to start, pick the next dependency
1.  If it was the last minor change:
    1.  Release a minor version of mw-node-qunit (see _Release_ section)
    1.  Back to start, pick the next dependency
1.  If it was a major, and there are more major deps, then:
    1.  Back to start, pick the next dependency
1.  If it was the last major change:
    1.  Release a major version of mw-node-qunit (see _Release_ section)
    1.  Back to start, pick the next dependency
