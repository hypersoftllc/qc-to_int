
import { toNum } from 'qc-to_num';

// ==========================================================================
/**
 * Attempts to convert an integer-like value to a JavaScript number.
 * `undefined`, `null`, and `NaN` return the default value (`null` by default).
 *
 * ```js
 * toInt(-1e4); // -10000
 * toInt('-1e4'); // -10000
 * toInt("2"); // 2
 * toInt(2.6); // 3
 * toInt(1.2); // 1
 * toInt(1); // 1
 * toInt(-1); // -1
 * toInt(-2.6); // -3
 * toInt(6.022e23); // 602200000000000000000000
 * toInt('6.022e23'); // 602200000000000000000000
 * toInt(null); // null
 * toInt(undefined); // null
 * toInt(NaN); // null
 * toInt(null, { def: 0 }); // 0
 * toInt(undefined, { def: 0 }); // 0
 * toInt(NaN, { def: 0 }); // 0
 * ```
 *
 * NOTE: This behaves differently than `parseInt` with the same input for
 * certain input especially strings and large numbers.
 *
 * ```js
 * toInt(-Infinity);           // -Infinity
 * parseInt(-Infinity);        // NaN
 *
 * toInt('-1e4');              // -10000
 * parseInt('-1e4');           // -1
 *
 * toInt('-0');                // 0
 * parseInt('-0');             // -0
 *
 * toInt('1e-4');              // 0
 * parseInt('1e-4');           // 1
 *
 * toInt(Number.MIN_VALUE);    // 0
 * parseInt(Number.MIN_VALUE); // 5
 *
 * toInt(Number.MAX_VALUE);    // Number.MAX_VALUE
 * parseInt(Number.MAX_VALUE); // 1
 *
 * toInt(6.022e23);            // 602200000000000000000000
 * parseInt(6.022e23);         // 6
 *
 * toInt(Infinity);            // Infinity
 * parseInt(Infinity);         // NaN
 * ```
 *
 * @param {*} input - The integer-like value to be converted to a JavaScript
 *   number.  This may also be an object with a custom `valueOf` method that
 *   returns a number or parsible string.
 * @param {Object} [opts] - The options to use when doing the conversion.
 * @param {*} [opts.def=null] - The default value to return if unable to convert.
 *   This is allowed to be of any data type.
 *
 * @returns {number|*} The input converted to an integer or the default value if
 *   unable to convert.  Note: a value of type number is not always returned when
 *   the default value is returned.
 */
function toInt(input?: any, opts?: { def?: any }): any {
  let options: { def?: any, exp?: any }, output: any;

  options = opts || {};
  options.exp = 0;
  output = toNum(input, options);
  return output;
}


// ==========================================================================
export { toInt, toInt as to_int };
