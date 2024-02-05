const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);

//console.log(balance.toFixed(2));

const otherNumber = 123.8754

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ************** maths **************
// The JavaScript Math object allows you to perform mathematical tasks on numbers.


// console.log(Math);
// console.log(Math.pow(2, 2));
// console.log(Math.log(3));
// console.log(Math.abs(-4)); 
//returns the absolute (positive) value 
// console.log(Math.round(4.2));
// console.log(Math.trunc(4.9));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.8));
// console.log(Math.min(9, 6, 2, 10));
// console.log(Math.PI);
// max, sqrt, pi

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// JavaScript will try to convert strings to numbers in all numeric operations:

let x = "100";
let y = "10";
let z = x / y; // also work for *, - not work for + ( JavaScript uses the + operator to concatenate the strings.)
// console.log(z); 
// console.log(typeof z);


// let result = Number.isFinite(123);  
let result = Number.isInteger('123'); 

// The Number.isNaN() method returns true if the value is NaN, and the type is a Number.
// let result = Number.isNaN('hello'); 

console.log(result);

// The Number.parseFloat() method parses a value as a string and returns the first number.
let result1 = Number.parseFloat(1000);
let result2 = Number.parseFloat("10");
let result3 = Number.parseInt("11.33");  //returns a whole number
let result4 = Number.parseFloat("34.9 45 66");
let result5 = Number.parseFloat("He was 40");

// console.table([result1,result2, result3, result4, result5])

// Convert a number into an exponential notation:
let num = 5.56789;
let n = num.toExponential();
// console.log(n);