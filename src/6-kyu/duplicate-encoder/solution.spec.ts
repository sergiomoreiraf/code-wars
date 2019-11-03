import { duplicateEncode } from './solution';

describe('Duplicate Encoder - 6 kuy', () => {
  it('should pass first provided test', () => {
    expect(duplicateEncode('din')).toBe('(((');
  });
  it('should pass second provided test', () => {
    expect(duplicateEncode('recede')).toBe('()()()');
  });
  it('should pass tird provided test', () => {
    expect(duplicateEncode('Success')).toBe(')())())');
  });
  it('should pass fourth provided test', () => {
    expect(duplicateEncode('(( @')).toBe('))((');
  });
});
