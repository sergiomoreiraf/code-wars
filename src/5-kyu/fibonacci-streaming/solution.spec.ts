import { fibonacciSequence } from './solution';

describe('Fibonacci Streaming - 5 kyu', () => {
  it('should return an iterator', () => {});
  it('should assert first 3 elements of fib', () => {
    const expected = [1, 1, 2];
    const stream = fibonacciSequence();
    const actual = Array(expected.length)
      .fill(0)
      .map(() => stream.next().value);
    expect(actual).toEqual(expected);
  });
  it('should assert first 5 elements of fib', () => {
    const expected = [1, 1, 2, 3, 5];
    const stream = fibonacciSequence();
    const actual = Array(expected.length)
      .fill(0)
      .map(() => stream.next().value);
    expect(actual).toEqual(expected);
  });
  it('should assert provided test', () => {
    const expected = [
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
      377,
      610,
      987,
      1597,
      2584,
      4181,
      6765,
      10946,
      17711,
      28657,
      46368,
      75025,
      121393,
      196418,
      317811,
      514229,
      832040
    ];
    const stream = fibonacciSequence();
    const actual = Array(expected.length)
      .fill(0)
      .map(() => stream.next().value);
    expect(actual).toEqual(expected);
  });
});
