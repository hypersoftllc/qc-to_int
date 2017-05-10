# qc-to_int

A simple JavaScript utility to convert various values to an integer.

[![Build Status](https://travis-ci.org/hypersoftllc/qc-to_int.svg?branch=master)](https://travis-ci.org/hypersoftllc/qc-to_int)


**What it does that `parseInt` doesn't**

* Allow a default value to be set instead of returning `NaN`.
* Convert `'-0'` to `0` instead of `-0`.
* Convert strings in scientific notation to the correct value.
  - `'1e-4'` is converted to `0` instead of `1`.
* Convert very large numbers written in scientific notation to the correct value.
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

toInt();               // `null`
toInt('');             // `null`
toInt('', { def: 0 }); // `0`
toInt('+3.1459');      // 3
toInt('1e4');          // 10000
toInt('-2.6');         // -3
toInt(-2.6);           // -3
toInt(NaN);            // `null`
toInt(null);           // `null`
toInt(undefined);      // `null`
```
