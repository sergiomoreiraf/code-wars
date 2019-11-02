export function uniqueInOrder(iterable: any): any {
  let lastValue;
  let result = [];
  for (let value of iterable) {
    if (!lastValue || value !== lastValue) {
      result.push(value);
      lastValue = value;
    }
  }
  return result;
}
