
import { to_int, toInt } from './index';

describe('qc-to_int', () => {

  describe('`toInt`', () => {

    it('should be a function', () => {
      expect(typeof toInt).toBe('function');
    });

    it('called with no arguments should return default default value', () => {
      expect(toInt()).toBeNull();
    });

    it('called with `arguments` should return default default value', function () {
      expect(toInt(arguments)).toBeNull();
    });

    it('called with `arguments` and default value should return default value', function () {
      const input = arguments;
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `undefined` should return default default value', () => {
      expect(toInt(undefined)).toBeNull();
    });

    it('called with `undefined` and default value should return default value', () => {
      const input = undefined;
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `null` should return default default value', () => {
      expect(toInt(null)).toBeNull();
    });

    it('called with `null` and default value should return default value', () => {
      const input = null;
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `NaN` should return default default value', () => {
      expect(toInt(NaN)).toBeNull();
    });

    it('called with `NaN` and default value should return default value', () => {
      const input = NaN;
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toBeNaN();

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `"NaN"` should return default default value', () => {
      expect(toInt('NaN')).toBeNull();
    });

    it('called with `"NaN"` and default value should return default value', () => {
      const input = 'NaN';
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `false` should return default default value', () => {
      expect(toInt(false)).toBeNull();
    });

    it('called with `false` and default value should return default value', () => {
      const input = false;
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `true` should return default default value', () => {
      expect(toInt(true)).toBeNull();
    });

    it('called with `true` and default value should return default value', () => {
      const input = true;
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
    });

    it('called with `-Infinity` should return `-Infinity`', () => {
      const input = -Infinity;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(-Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(-Infinity);
    });

    it('called with `"-Infinity"` should return `-Infinity`', () => {
      const input = '-Infinity';
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(-Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(-Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(-Infinity);
    });

    it('called with `-Number.POSITIVE_INFINITY` should return `-Number.POSITIVE_INFINITY`', () => {
      const input = -Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(-Number.POSITIVE_INFINITY);
    });

    it('called with `Number.NEGATIVE_INFINITY` should return `Number.NEGATIVE_INFINITY`', () => {
      const input = Number.NEGATIVE_INFINITY;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Number.NEGATIVE_INFINITY);

      toValue = toInt(input, { def: null });
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

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(Infinity);
    });

    it('called with `"Infinity"` should return `Infinity`', () => {
      const input = "Infinity";
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Infinity);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(Infinity);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(Infinity);
    });

    it('called with `Number.POSITIVE_INFINITY` should return `Number.POSITIVE_INFINITY`', () => {
      const input = Number.POSITIVE_INFINITY;
      let toValue: any;

      toValue = toInt(input);
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: null });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBe(Number.POSITIVE_INFINITY);
    });

    it('called with a number value should return number', () => {
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

    it('called with a `Number` instance should return number primitive', () => {
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

    it('called with parsible string value should return number', () => {
      let toValue;

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

    it('called with an unparsible string value should return default default value', () => {
      expect(toInt('')).toBeNull();
      expect(toInt('foo')).toBeNull();
    });

    it('called with an unparsible string value and default value should return default value', () => {
      const input = 'foo';
      let toValue: any;

      toValue = toInt(input, { def: NaN });
      expect(toValue).toEqual(NaN);

      toValue = toInt(input, { def: 0 });
      expect(toValue).toBe(0);

      toValue = toInt(input, { def: 123456.7 });
      expect(toValue).toBe(123456.7);

      toValue = toInt(input, { def: '' });
      expect(toValue).toBe('');

      toValue = toInt(input, { def: false });
      expect(toValue).toBe(false);

      toValue = toInt(input, { def: null });
      expect(toValue).toBeNull();

      toValue = toInt(input, { def: undefined });
      expect(toValue).toBeUndefined();
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

  });

  describe('`to_int`', () => {

    it('should be a function', () => {
      expect(typeof to_int).toBe('function');
    });

    it('should be an alias of `toInt`', () => {
      expect(to_int).toBe(toInt);
    });

  });

});
