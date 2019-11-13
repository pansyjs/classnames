import classNames from '../src';

describe('classnames', () => {
  it('keeps object keys with truthy values', () => {
    expect(classNames({
			a: true,
			b: false,
			c: 0,
			d: null,
			e: undefined,
			f: 1
		})).toBe('a f');
  })

  it('joins arrays of class names and ignore falsy values', function () {
		expect(classNames('a', 0, null, undefined, true, 1, 'b')).toBe('a 1 b');
  });

  it('supports heterogenous arguments', function () {
    expect(classNames({a: true}, 'b', 0)).toBe('a b');
  });

  it('should be trimmed', function () {
    expect(classNames('', 'b', {}, '')).toBe('b');
  });

  it('returns an empty string for an empty configuration', function () {
    expect(classNames({})).toBe('');
  });

  it('supports an array of class names', function () {
    expect(classNames(['a', 'b'])).toBe('a b');
  });

  it('joins array arguments with string arguments', function () {
    expect(classNames(['a', 'b'], 'c')).toBe('a b c');
    expect(classNames('c', ['a', 'b'])).toBe('c a b');
  });

  it('handles multiple array arguments', function () {
    expect(classNames(['a', 'b'], ['c', 'd'])).toBe('a b c d');
  });

  it('handles arrays that include falsy and true values', function () {
    expect(classNames(['a', 0, null, undefined, false, true, 'b'])).toBe('a b');
  });

  it('handles arrays that include arrays', function () {
    expect(classNames(['a', ['b', 'c']])).toBe('a b c');
  });

  it('handles arrays that include objects', function () {
    expect(classNames(['a', {b: true, c: false}])).toBe('a b');
  });

  it('handles deep array recursion', function () {
    expect(classNames(['a', ['b', ['c', {d: true}]]])).toBe('a b c d');
  });

  it('handles arrays that are empty', function () {
    expect(classNames('a', [])).toBe('a');
  });

  it('handles nested arrays that have empty nested arrays', function () {
    expect(classNames('a', [[]])).toBe('a');
	});
})
