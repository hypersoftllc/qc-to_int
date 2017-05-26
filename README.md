# qc-to_int

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A simple JavaScript utility to convert various values to an integer.

**What it does that `parseInt` doesn't**

* Allow a default value to be set instead of returning `NaN`.
* Convert `'-0'` to `0` instead of `-0`.
* Convert strings in scientific notation to the correct value.
  - `'1e-4'` is converted to `0` instead of `1`.
* Convert very large numbers written in scientific notation to the correct
  value.
  - `6.022e23` is converted to `6.022e23` instead of `6`.
* Convert `Number.MIN_VALUE` to `0` instead of `5`.
* Convert `Number.MAX_VALUE` to `Number.MAX_VALUE` instead of `1`.
* Convert `Infinity` to `Infinity` instead of `NaN`.


## Installation

```sh
npm install --save qc-to_int
```


## Example Usage

```js
import { toInt } from 'qc-to_int';

toInt();               // `undefined`
toInt('');             // `''`
toInt('', 0);          // `0`
toInt('', { def: 0 }); // `0`
toInt('+3.1459');      // 3
toInt('1e4');          // 10000
toInt('-2.6');         // -3
toInt(-2.6);           // -3
toInt(NaN);            // `NaN`
toInt(null);           // `null`
toInt(undefined);      // `undefined`
```


[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-to_int/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-to_int?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-to_int.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-to_int
[license-image]: http://img.shields.io/npm/l/qc-to_int.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-to_int
[npm-badge-png]: https://nodei.co/npm/qc-to_int.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_int.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_int
