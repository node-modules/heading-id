# heading-id

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/heading-id.svg?style=flat-square
[npm-url]: https://npmjs.org/package/heading-id
[travis-image]: https://img.shields.io/travis/node-modules/heading-id.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/heading-id
[codecov-image]: https://img.shields.io/codecov/c/github/node-modules/heading-id.svg?style=flat-square
[codecov-url]: https://codecov.io/github/node-modules/heading-id?branch=master
[david-image]: https://img.shields.io/david/node-modules/heading-id.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/heading-id
[snyk-image]: https://snyk.io/test/npm/heading-id/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/heading-id
[download-image]: https://img.shields.io/npm/dm/heading-id.svg?style=flat-square
[download-url]: https://npmjs.org/package/heading-id

Calculate Heading element id value.

## Install

```bash
$ npm i heading-id --save
```

## Usage

```js
const HeadingId = require('heading-id');

const calculater = new HeadingId();
console.log(calculater.id('新闻标题'));
// 6f185474
console.log(calculater.id('新闻标题'));
// 6f185474-1
console.log(calculater.id('新闻标题'));
// 6f185474-2
console.log(calculater.id('awesome-news'));
// awesome-news
console.log(calculater.id('awesome-news'));
// awesome-news-1
console.log(calculater.id('awesome-news'));
// awesome-news-2
```

## Questions & Suggestions

Please open an issue [here](https://github.com/node-modules/heading-id/issues).

## License

[MIT](LICENSE)
