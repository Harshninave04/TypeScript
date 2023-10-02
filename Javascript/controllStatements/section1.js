"use strict";
// if statements
const grocceryShopping = true;
if (grocceryShopping) {
    console.log("I need to buy groccery for home");
}
else {
    console.log("I go park with my friend");
}
let tomorrowHoliday = false;
let freeTomorrow = true;
if (tomorrowHoliday && freeTomorrow) {
    console.log("I will be visiting bank tomorrow");
}
else if (tomorrowHoliday && !freeTomorrow) {
    console.log("Not visiting bank tomorrow");
}
else {
    console.log("Busy tomorrow");
}
let age = 90;
if (age >= 18 && age < 30) {
    console.log("Person is eligible to vote.");
}
else if (age >= 30) {
    console.log("Person is above 30 and can marry");
}
else {
    console.log("Person can't drive and vote");
}
// even or odd
let num = 52;
if (num % 2 == 0) {
    console.log("The number is even .");
}
else {
    console.log("the number is odd");
}
// checking is really section1.ts is converted to js file or not
const harsh = 1;
if (harsh) {
    console.log("harsh");
}
else {
    console.log("ninave");
}
