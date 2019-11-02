export function spinWords(str: string): string {
  const arr = str.split(' ');

  let result = [];
  for (let value of arr) {
    if (value.length >= 5) {
      result.push(
        value
          .split('')
          .reverse()
          .join('')
      );
    } else {
      result.push(value);
    }
  }
  return result.join(' ');
}
