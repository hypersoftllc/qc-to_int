
import { toInt, toIntOrNull } from './index';

describe('qc-to_int', () => {

  describe('`toInt`', () => {

    it('should be a function', () => {
      expect(typeof toInt).toBe('function');
    });

    it('called with no arguments should return `undefined`', () => {
      expect(toInt()).toBeUndefined();
    });

    it('called with `arguments` should return input value', function () {
      expect(toInt(arguments)).toBe(arguments);
    });

    it('called with `arguments` and default value should return default value', function () {
      const input = arguments;
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toBe(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `undefined` should return input value', () => {
      expect(toInt(undefined)).toBeUndefined();
    });

    it('called with `undefined` and default value should return default value', () => {
      const input = undefined;
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toBe(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `null` should return input value', () => {
      expect(toInt(null)).toBeNull();
    });

    it('called with `null` and default value should return default value', () => {
      const input = null;
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toBe(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `NaN` should return input value', () => {
      expect(toInt(NaN)).toEqual(NaN);
    });

    it('called with `NaN` and default value should return default value', () => {
      const input = NaN;
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toEqual(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toEqual(input);
    });

    it('called with `"NaN"` should return input value', () => {
      expect(toInt('NaN')).toBe('NaN');
    });

    it('called with `"NaN"` and default value should return default value', () => {
      const input = 'NaN';
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toBe(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `false` should return input value', () => {
      expect(toInt(false)).toBe(false);
    });

    it('called with `false` and default value should return default value', () => {
      const input = false;
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toBe(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `true` should return input value', () => {
      expect(toInt(true)).toBe(true);
    });

    it('called with `true` and default value should return default value', () => {
      const input = true;
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toBe(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with `-Infinity` should return `-Infinity`', () => {
      const input = -Infinity;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(-Infinity);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(-Infinity);

      toValue = toInt(input, 0);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, '');
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, false);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, null);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, undefined);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(-Infinity);
    });

    it('called with `"-Infinity"` should return `-Infinity`', () => {
      const input = '-Infinity';
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(-Infinity);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(-Infinity);

      toValue = toInt(input, 0);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, '');
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, false);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, null);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, undefined);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(-Infinity);
    });

    it('called with `-Number.POSITIVE_INFINITY` should return `-Number.POSITIVE_INFINITY`', () => {
      const input = -Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, 0);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, '');
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, false);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, null);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, undefined);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NEGATIVE_INFINITY` should return `Number.NEGATIVE_INFINITY`', () => {
      const input = Number.NEGATIVE_INFINITY;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, 0);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, '');
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, false);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, null);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, undefined);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);
    });

    it('called with `-Number.MAX_VALUE` should return `-Number.MAX_VALUE`', () => {
      let toValue = toInt(-Number.MAX_VALUE);

      expect(toValue).toBe(-Number.MAX_VALUE);
    });

    it('called with `-Number.MIN_VALUE` should return `0`', () => {
      let toValue = toInt(-Number.MIN_VALUE);

      expect(toValue).toBe(0);
    });

    it('called with `-0` should return `0`', () => {
      let toValue = toInt(-0);

      expect(toValue).toBe(0);
    });

    it('called with `0` should return `0`', () => {
      let toValue = toInt(0);

      expect(toValue).toBe(0);
    });

    it('called with `"-0"` should return `0`', () => {
      let toValue = toInt('-0');

      expect(toValue).toBe(0);
    });

    it('called with `"0"` should return `0`', () => {
      let toValue = toInt("0");

      expect(toValue).toBe(0);
    });

    it('called with `Number.MIN_VALUE` should return `0`', () => {
      let toValue = toInt(Number.MIN_VALUE);

      expect(toValue).toBe(0);
    });

    it('called with `Number.MAX_VALUE` should return `Number.MAX_VALUE`', () => {
      let toValue = toInt(Number.MAX_VALUE);

      expect(toValue).toBe(Number.MAX_VALUE);
    });

    it('called with `Infinity` should return `Infinity`', () => {
      const input = Infinity;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(Infinity);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Infinity);

      toValue = toInt(input, 0);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, '');
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, false);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, null);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, undefined);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(Infinity);
    });

    it('called with `"Infinity"` should return `Infinity`', () => {
      const input = "Infinity";
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(Infinity);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Infinity);

      toValue = toInt(input, 0);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, '');
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, false);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, null);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, undefined);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` should return `Number.POSITIVE_INFINITY`', () => {
      const input = Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Number.POSITIVE_INFINITY);

      toValue = toInt(input, 0);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, '');
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, false);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, null);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, undefined);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with a number value should return number rounded to nearest integer', () => {
      let toValue: any;

      toValue = toInt(-6.022e23);
      expect(toValue).toBe(-602200000000000000000000);

      toValue = toInt(-1e4);
      expect(toValue).toBe(-10000);

      toValue = toInt(-2.6);
      expect(toValue).toBe(-3);

      toValue = toInt(-2.5);
      expect(toValue).toBe(-2);

      toValue = toInt(-1.2);
      expect(toValue).toBe(-1);

      toValue = toInt(-1);
      expect(toValue).toBe(-1);

      toValue = toInt(-0);
      expect(toValue).toBe(0);

      toValue = toInt(0);
      expect(toValue).toBe(0);

      toValue = toInt(1);
      expect(toValue).toBe(1);

      toValue = toInt(1.2);
      expect(toValue).toBe(1);

      toValue = toInt(2.5);
      expect(toValue).toBe(3);

      toValue = toInt(2.6);
      expect(toValue).toBe(3);

      toValue = toInt(1e4);
      expect(toValue).toBe(10000);

      toValue = toInt(6.022e23);
      expect(toValue).toBe(602200000000000000000000);
    });

    it('called with a `Number` instance should return number primitive rounded to nearest integer', () => {
      let toValue: any;

      toValue = toInt(new Number(-2.6));
      expect(toValue).toBe(-3);

      toValue = toInt(new Number(-1));
      expect(toValue).toBe(-1);

      toValue = toInt(new Number(1));
      expect(toValue).toBe(1);

      toValue = toInt(new Number(1.2));
      expect(toValue).toBe(1);

      toValue = toInt(new Number(2.6));
      expect(toValue).toBe(3);
    });

    it('called with a parsible string value should return number rounded to nearest integer', () => {
      let toValue: any;

      toValue = toInt('-6.022e23');
      expect(toValue).toBe(-602200000000000000000000);

      toValue = toInt('-1e4');
      expect(toValue).toBe(-10000);

      toValue = toInt('-2.6');
      expect(toValue).toBe(-3);

      toValue = toInt('-2.5');
      expect(toValue).toBe(-2);

      toValue = toInt('-1.2');
      expect(toValue).toBe(-1);

      toValue = toInt('-1');
      expect(toValue).toBe(-1);

      toValue = toInt('-1e-4');
      expect(toValue).toBe(0);

      toValue = toInt('-0');
      expect(toValue).toBe(0);

      toValue = toInt('0');
      expect(toValue).toBe(0);

      toValue = toInt('1e-4');
      expect(toValue).toBe(0);

      toValue = toInt('1');
      expect(toValue).toBe(1);

      toValue = toInt('1.2');
      expect(toValue).toBe(1);

      toValue = toInt('2.5');
      expect(toValue).toBe(3);

      toValue = toInt('2.6');
      expect(toValue).toBe(3);

      toValue = toInt('1e4');
      expect(toValue).toBe(10000);

      toValue = toInt('6.022e23');
      expect(toValue).toBe(602200000000000000000000);
    });

    it('called with an inconvertible value should return input value', function () {
      let input: any;

      input = arguments;
      expect(toInt(input)).toBe(input);

      input = [];
      expect(toInt(input)).toBe(input);

      input = ['not empty'];
      expect(toInt(input)).toBe(input);

      input = false;
      expect(toInt(input)).toBe(input);

      input = true;
      expect(toInt(input)).toBe(input);

      input = new Error('Help!');
      expect(toInt(input)).toBe(input);

      input = function () {};
      expect(toInt(input)).toBe(input);

      input = NaN;
      expect(toInt(input)).toEqual(input);

      input = {};
      expect(toInt(input)).toBe(input);

      input = { prop: 'not empty' };
      expect(toInt(input)).toBe(input);

      input = /regexp/;
      expect(toInt(input)).toBe(input);

      input = '';
      expect(toInt(input)).toBe(input);

      input = 'not empty';
      expect(toInt(input)).toBe(input);

      input = null;
      expect(toInt(input)).toBe(input);

      input = undefined;
      expect(toInt(input)).toBe(input);
    });

    it('called with an inconvertible value and default value should return default value', () => {
      const input = 'foo';
      let toValue: any;

      toValue = toInt(input, NaN);
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, 0);
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, 123456.7);
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, '');
      expect(toValue).toBe('');

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, false);
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, null);
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, undefined);
      expect(toValue).toBe(input);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(input);
    });

    it('called with an object implementing the `valueOf` method that returns a number value should return the number', () => {
      let date: Date, input: { valueOf: () => any }, toValue: any;

      input = { valueOf: function () { return -2.6; } };
      toValue = toInt(input);
      expect(toValue).toBe(-3);

      input = { valueOf: function () { return -2.5; } };
      toValue = toInt(input);
      expect(toValue).toBe(-2);

      input = { valueOf: function () { return -1.2; } };
      toValue = toInt(input);
      expect(toValue).toBe(-1);

      input = { valueOf: function () { return -1; } };
      toValue = toInt(input);
      expect(toValue).toBe(-1);

      input = { valueOf: function () { return -0; } };
      toValue = toInt(input);
      expect(toValue).toBe(0);

      input = { valueOf: function () { return 0; } };
      toValue = toInt(input);
      expect(toValue).toBe(0);

      input = { valueOf: function () { return 1; } };
      toValue = toInt(input);
      expect(toValue).toBe(1);
      expect(toValue).toBe(1.0);

      input = { valueOf: function () { return 1.2; } };
      toValue = toInt(input);
      expect(toValue).toBe(1);

      input = { valueOf: function () { return 2.5; } };
      toValue = toInt(input);
      expect(toValue).toBe(3);

      input = { valueOf: function () { return 2.6; } };
      toValue = toInt(input);
      expect(toValue).toBe(3);

      date = new Date(Date.UTC(2001, 0, 1, 12));
      toValue = toInt(date);
      expect(toValue).toBe(978350400000);
    });

    it('called with an object implementing the `valueOf` method that returns a parsible value should return the number', () => {
      let input: { valueOf: () => any }, toValue: any;

      input = { valueOf: function () { return '-2.6'; } };
      toValue = toInt(input);
      expect(toValue).toBe(-3);

      input = { valueOf: function () { return '-2.5'; } };
      toValue = toInt(input);
      expect(toValue).toBe(-2);

      input = { valueOf: function () { return '-1.2'; } };
      toValue = toInt(input);
      expect(toValue).toBe(-1);

      input = { valueOf: function () { return '-1'; } };
      toValue = toInt(input);
      expect(toValue).toBe(-1);

      input = { valueOf: function () { return '-0'; } };
      toValue = toInt(input);
      expect(toValue).toBe(0);

      input = { valueOf: function () { return '0'; } };
      toValue = toInt(input);
      expect(toValue).toBe(0);

      input = { valueOf: function () { return '1'; } };
      toValue = toInt(input);
      expect(toValue).toBe(1);

      input = { valueOf: function () { return '1.2'; } };
      toValue = toInt(input);
      expect(toValue).toBe(1);

      input = { valueOf: function () { return '2.5'; } };
      toValue = toInt(input);
      expect(toValue).toBe(3);

      input = { valueOf: function () { return '2.6'; } };
      toValue = toInt(input);
      expect(toValue).toBe(3);
    });

    it('called with an object implementing the `valueOf` method that returns an inconvertible value should return input value', () => {
      let input: { valueOf: () => any }, toValue: any;

      input = { valueOf: function () { return arguments; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return []; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return ['not empty']; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return false; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return true; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return new Error('Help!'); } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return function () {}; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return NaN; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return {}; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return { prop: 'not empty' }; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return /regexp/; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return ''; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return 'not empty'; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return null; } };
      expect(toInt(input)).toBe(input);

      input = { valueOf: function () { return undefined; } };
      expect(toInt(input)).toBe(input);
    });

  });

  describe('`toIntOrNull`', () => {

    it('should be a function', () => {
      expect(typeof toIntOrNull).toBe('function');
    });

    it('called with no arguments should return `null`', () => {
      expect(toIntOrNull()).toBeNull();
    });

    it('called with inconvertible input should return `null`', function () {
      expect(toIntOrNull(arguments)).toBeNull();
      expect(toIntOrNull([])).toBeNull();
      expect(toIntOrNull(['not empty'])).toBeNull();
      expect(toIntOrNull(new Error('Help!'))).toBeNull();
      expect(toIntOrNull(function () {})).toBeNull();
      expect(toIntOrNull({})).toBeNull();
      expect(toIntOrNull({ prop: 'not empty' })).toBeNull();
      expect(toIntOrNull(null)).toBeNull();
      expect(toIntOrNull(NaN)).toBeNull();
      expect(toIntOrNull(Number.NaN)).toBeNull();
      expect(toIntOrNull(/regexp/)).toBeNull();
      expect(toIntOrNull('')).toBeNull();
      expect(toIntOrNull('not empty')).toBeNull();
      expect(toIntOrNull(undefined)).toBeNull();
    });

  });

});
