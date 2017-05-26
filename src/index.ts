
import { round } from 'qc-round';
import { toNum } from 'qc-to_num';

const DEF = {};
const DEF_ARG = { def: DEF };

// ==========================================================================
/**
 * Attempts to convert an integer-like value to a JavaScript number primitive.
 *
 * If the integer-like input cannot be converted to a number, then the default
 * value is returned.  When the default value is undefined, then the input is
 * returned.
 *
 * NOTE: This function behaves differently than the native `Number` constructor
 * in several ways.
 *
 * 1) Won't return a `Number' instance with a type of `'object'` when used with
 *    the new operator.
 *
 * 2) Won't return `NaN` when not convertible (unless you use `NaN` for the
 *    default).
 *
 * 3) Correctly handles `-0` which returns `0' instead of `-0`.
 *
 * 4) Correctly handles `'-0'` which returns `0' instead of `-0`.
 *
 * 5) It automatically rounds to the nearest integer.
 *
 * ```js
 * toInt(-1e4);                    // `-10000`
 * toInt('-1e4');                  // `-10000`
 * toInt("2");                     // `2`
 * toInt(2.6);                     // `3`
 * toInt(1.2);                     // `1`
 * toInt(1);                       // `1`
 * toInt(-1);                      // `-1`
 * toInt(-2.6);                    // `-3`
 * toInt(6.022e23);                // `602200000000000000000000`
 * toInt('6.022e23');              // `602200000000000000000000`
 * toInt(null);                    // `null`
 * toInt(undefined);               // `undefined`
 * toInt(NaN);                     // `NaN`
 * toInt(null, 0);                 // `0`
 * toInt(null, { def: 0 });        // `0`
 * toInt(undefined, 0);            // `0`
 * toInt(undefined, { def: 0 });   // `0`
 * toInt(NaN, 0);                  // `0`
 * toInt(NaN, { def: 0 });         // `0`
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
 * @param {*=} input - The value to be converted to a JavaScript number
 *   primitive rounded to the nearest integer.  This may also be an object with a
 *   custom `valueOf` method that returns a number or parsible string.
 * @param {*=|{ def=: *}} [def=undefined] - The default value to return if
 *   unable to convert.  This is allowed to be of any data type.  This may also
 *   be an object with a `def` property.  To return an object as a default value,
 *   then wrap it in an object with a `def` property set to the object that is to
 *   be used as the default value.  A default value resolving to `undefined`
 *   means return the input when not convertible.
 *
 * @returns {number|*} The input converted to an integer or the default value if
 *   unable to convert.  Note: a value of type number is not always returned when
 *   the default value is returned.
 */
function toInt(input?: any, def?: any | { def?: any }): any {
  let output: any;

  output = toNum(input, DEF_ARG);
  if (output === DEF) {
    if (typeof def == 'object' && def !== null) {
      def = def.def;
    }
    else {
      def = def;
    }
    if (def === undefined) {
      def = input;
    }

    output = def;
  }
  else {
    output = round(output, 0);
  }
  return output;
}


// ==========================================================================
export { toInt, toInt as to_int };
