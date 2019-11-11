import { uniqueInOrder } from './unique';

describe('Unique in order - 6 kyu', () => {
  it('should work with empty string and array', () => {
    expect(uniqueInOrder('')).toStrictEqual([]);
    expect(uniqueInOrder([])).toStrictEqual([]);
  });
  it('should pass first provided test', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual([
      'A',
      'B',
      'C',
      'D',
      'A',
      'B'
    ]);
  });
  it('should pass second provided test', () => {
    expect(uniqueInOrder('ABBCcAD')).toStrictEqual([
      'A',
      'B',
      'C',
      'c',
      'A',
      'D'
    ]);
  });
  it('should pass tird provided test', () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
  });
});
