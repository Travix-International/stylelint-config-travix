# stylelint-config-travix

> [StyleLint](https://github.com/stylelint/stylelint) shareable config for [Travix International](https://travix.com)


## Install

```
$ npm install --save-dev stylelint stylelint-config-travix
```

## Usage

Add some ESLint config to your `.stylelintrc`:

```json
{
  "extends": [
    "stylelint-config-travix"
  ]
}
```

## Releasing

To publish a new version on npm, run:

```
$ make release VERSION=patch
```

Possible `VERSION` values include: `patch`, `minor`, `major`.


## Changelogs

Changelogs are generated using the `github_changelog_generator` gem.

Make sure you have Ruby v2.2+:

```
$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
$ curl -sSL https://get.rvm.io | bash -s stable

$ rvm install 2.2.2
```

Then install the gem:

```
$ gem install github_changelog_generator
```

Now you can generate `CHANGELOG.md` file automatically by running:

```
$ make changelog GITHUB_API_TOKEN="YOUR_GITHUB_TOKEN"
```

### GitHub API Token

You can generate a token [here](https://github.com/settings/tokens/new?description=GitHub%20Changelog%20Generator%20token)

Since this is a public repository, you only need `public_repo` access for the token.

### Pushing `CHANGELOG.md`

Once the `CHANGELOG.md` file is generated, it is up to you to commit and push it to GitHub.

There is a handy command available:

```
$ make push-changelog
```

## License

MIT © [Travix International](https://travix.com)