export function duplicateEncode(word: string): string {
  word = word.toLowerCase();
  let countObj: { [index: string]: number } = {};
  for (let char of word) {
    let count = countObj[char] || 0;
    countObj[char] = ++count;
  }
  let result = '';
  for (let char of word) {
    result += countObj[char] > 1 ? ')' : '(';
  }
  return result;
}
