function vichitra() {
  let num = 1;
  while (num <= 10) {
    console.log(num);
    num++;
    if (num === 6) {
      console.log(num);
      console.log("I found it");
      break;
    }
  }
}

vichitra();

// write a while loop that logs number between 1 and 10 in reverse.
let counter = 10;
while (counter >= 1) {
  console.log(counter);
  counter--;
}