function console3() {
  console.log("console ke andar");
}

console3();

function console1(a: number, b: number) {
  let result = a + b;
  return result;
}
let answer = console1(3, 4);
console.log(answer);

function console2(a: number, b: number): void | number {
  return a + b;
}
let num1 = 24,
  num2 = 46;
console2(num1, num2);
