// primitive 

// 7 types: string number boolen null undefined symbol bigI  

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 32424465737657n

// refrence (non primitive)
// array , objects, functions 

const heros = ["abc", "xyz", "oqr", "tuv"];

let myObject = 
{  
    name: "tanu",
    age : 15,
}

const myfunction  = function() {
    console.log("Hello World");
}

console.log(typeof anotherId);