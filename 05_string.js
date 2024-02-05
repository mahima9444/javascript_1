// Strings are immutable: Strings cannot be changed, only replaced.

const name = "tanu"

const repoCount = 5

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abcdefgh-mn-pqr')

//console.log(gameName);
//console.log(gameName[0])
//console.log(gameName.__proto__);
//console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(6));
//console.log(gameName.indexOf('g'));

const newString = gameName.substring(3, 7)
const newString1 = gameName.substr(3, 7)

// console.log(newString);
// console.log(newString1);


const anotherString = gameName.slice(-6, -3)
// console.log(anotherString);

const newStringOne = "      pqrstuvwxyz.      "

//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_trim"

//console.log(url.replace('filename', 'name'));

// console.log(url.includes('trim')); 

const gameName2 = gameName.split('-')

// console.log(gameName2)
// console.log(typeof gameName2)

// console.log(gameName.padStart(2, '!'));

let text = "abcd";
let text1 = "9";

text = text.padStart(25,"0@");
console.log(text);
//console.log(text1.padEnd(4, "4"));

let text2 = "Hello world!";
//console.log(text2.repeat(2)); 

