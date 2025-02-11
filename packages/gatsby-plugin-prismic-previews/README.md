# gatsby-plugin-prismic-previews

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Conventional Commits][conventional-commits-src]][conventional-commits-href]
[![License][license-src]][license-href]

Integrate live [Prismic Previews][prismic-previews] into a static [Gatsby][gatsby] site to enable editors a seamless content editing experience.

- 🤝 Integrates tightly with the [Gatsby Prismic source plugin][gatsby-source-prismic]
- 👁 Refreshes preview content automatically as changes are saved in Prismic
- 🚅 Adds the [Prismic Toolbar][prismic-toolbar] with an in-app edit button and preview link sharing.
- 🌩 No extra infrastructure or costs required (specifically, [Gatsby Cloud][gatsby-cloud] is not required)

## Install

```bash
npm install gatsby-plugin-prismic-previews gatsby-source-prismic gatsby-plugin-image
```

## Documentation

To discover what's new on this package check out [the changelog][changelog]. For full documentation, visit the [official Prismic documentation][prismic-docs].

## Contributing

Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of the Prismic developer community!

**Asking a question**: [Open a new topic][forum-question] on our community forum explaining what you want to achieve / your question. Our support team will get back to you shortly.

**Reporting a bug**: [Open an issue][repo-bug-report] explaining your application's setup and the bug you're encountering.

**Suggesting an improvement**: [Open an issue][repo-feature-request] explaining your improvement or feature so we can discuss and learn more.

**Submitting code changes**: For small fixes, feel free to [open a PR][repo-pull-requests] with a description of your changes. For large changes, please first [open an issue][repo-feature-request] so we can discuss if and how the changes should be implemented.

## License

```
Copyright 2013-2021 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

<!-- Links -->

[prismic]: https://prismic.io
[gatsby]: https://www.gatsbyjs.com/
[prismic-previews]: https://prismic.io/docs/core-concepts/preview-setup
[gatsby-source-prismic]: https://github.com/prismicio/gatsby/tree/main/packages/gatsby-source-prismic
[prismic-toolbar]: https://prismic.io/docs/technologies/previews-and-the-prismic-toolbar-javascript
[gatsby-cloud]: https://www.gatsbyjs.com/products/cloud/

<!-- TODO: Replace link with a more useful one if available -->

[prismic-docs]: https://prismic.io/docs/technologies/gatsby
[changelog]: https://github.com/prismicio/gatsby/blob/main/packages/gatsby-plugin-prismic-previews/CHANGELOG.md

<!-- TODO: Replace link with a more useful one if available -->

[forum-question]: https://community.prismic.io
[repo-bug-report]: https://github.com/prismicio/gatsby/issues/new?assignees=&labels=bug&template=bug_report.md&title=
[repo-feature-request]: https://github.com/prismicio/gatsby/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=
[repo-pull-requests]: https://github.com/prismicio/gatsby/pulls

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/gatsby-plugin-prismic-previews/latest.svg
[npm-version-href]: https://npmjs.com/package/gatsby-plugin-prismic-previews
[npm-downloads-src]: https://img.shields.io/npm/dm/gatsby-plugin-prismic-previews.svg
[npm-downloads-href]: https://npmjs.com/package/gatsby-plugin-prismic-previews
[github-actions-ci-src]: https://github.com/prismicio/gatsby/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/prismicio/gatsby/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/prismicio/gatsby.svg
[codecov-href]: https://codecov.io/gh/prismicio/gatsby
[conventional-commits-src]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-href]: https://conventionalcommits.org
[license-src]: https://img.shields.io/npm/l/gatsby-plugin-prismic-previews.svg
[license-href]: https://npmjs.com/package/gatsby-plugin-prismic-previews
