import { spinWords } from './spin-words';

describe('Stop gninnipS My sdroW! - 6 kyu', () => {
  it('should acept empty string', () => {
    expect(spinWords('')).toBe('');
  });
  it('should pass first provided test', () => {
    expect(spinWords('Welcome')).toBe('emocleW');
  });
  it('should pass second provided test', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });
  it('should pass tird provided test', () => {
    expect(spinWords('This is a test')).toBe('This is a test');
  });
  it('should pass fourth provided test', () => {
    expect(spinWords('This is another test')).toBe('This is rehtona test');
  });
});
