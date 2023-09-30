// write a function which takes parameter a and b as a number and print addition of the numbers.

function addNum(a: number, b: number) {
    const ans = {
      add: a + b,
      sub: a - b,
      mul: a * b,
      div: a / b,
      mod: a % b,
    };
  return ans;
}
console.log(addNum(12, 4));
