// This should be bigint, not number!
export function fibonacciSequence(): Iterator<number> {
  let minus1 = 1;
  let minus2 = 0;
  let fib = 0;
  function next(): IteratorResult<number> {
    fib++;
    if (fib === 1) {
      return { done: false, value: 1 };
    }
    let value = minus1 + minus2;
    minus2 = minus1;
    minus1 = value;
    return {
      done: false,
      value: value
    };
  }
  return {
    next: next
  };
}
