import { generateHashtag } from './solution';

describe('The Hashtag Generator - 5 kyu', () => {
  it('should return false when empty', () => {
    expect(generateHashtag('')).toBe(false);
    expect(generateHashtag('    ')).toBe(false);
  });
  it('should expected a Hashtag (#) at the beginning.', () => {
    expect(generateHashtag('Do We have A Hashtag')).toBe('#DoWeHaveAHashtag');
  });
  it('should handle a single word.', () => {
    expect(generateHashtag('Codewars')).toBe('#Codewars');
  });
  it('should return false if greater than 140.', () => {
    expect(generateHashtag('a'.repeat(139))).toBe('#A' + 'a'.repeat(138));
    expect(generateHashtag('a'.repeat(140))).toBe(false);
  });
  it('should handle mid spaces.', () => {
    expect(generateHashtag('code' + ' '.repeat(140) + 'wars')).toBe(
      '#CodeWars'
    );
  });
});
