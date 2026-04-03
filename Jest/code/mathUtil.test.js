// math.test.js
const { addValues, mulValues } = require('./math');

describe('addValues function', () => {
  test('subtracts two positive numbers', () => {
    expect(addValues(10, 5)).toBe(5);
  });

  test('subtracts with negative numbers', () => {
    expect(addValues(-2, -3)).toBe(1);
  });

  test('subtracts zero', () => {
    expect(addValues(7, 0)).toBe(7);
    expect(addValues(0, 7)).toBe(-7);
  });

  test('works with floating point numbers', () => {
    expect(addValues(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe('mulValues function', () => {
  test('multiplies two positive numbers', () => {
    expect(mulValues(4, 5)).toBe(20);
  });

  test('multiplies with negative numbers', () => {
    expect(mulValues(-3, 6)).toBe(-18);
  });

  test('multiplies by zero', () => {
    expect(mulValues(7, 0)).toBe(0);
  });

  test('works with floating point numbers', () => {
    expect(mulValues(2.5, 4)).toBeCloseTo(10.0);
  });
});