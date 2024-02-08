//******** foreach **********


const array1 = ["P", "Q", "R", "ST"];

// array1.forEach( function (val) {
//     console.log(val);
// } )

// array1.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(val) {
//     console.log(val);
// }

// array1.forEach(printMe)

array1.forEach((val, index, array1) => {
//   console.log(val, index, array1);
});

const myArray = [
  {
    name: "abc",
    age: 15,
  },
  {
    name: "pqr",
    age: 16,
  },
  {
    name: "xyz",
    age: 17,
  },
]

//array

myArray.forEach( (val) => {
    // console.log(val.name);
} )

for (const key of myArray) {
//  console.log(key);
}

// foreach on map
const map = new Map()
map.set("1", "one")
map.set("2", "two")
map.set("3", "three")
// map.set(3, "three")
map.set("4", "three")

// console.log(map);

map.forEach((value, key) => {
    // console.log(key, ':-', value );
})

// const name1 = "tanu"

// name1.forEach( (val) => {
//   console.log(val);
// })

let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNum = myNum.filter( (num) => num > 5)

// const newNum = myNum.filter( (num) => {
// //  num > 5 this not give output
// return num > 5
// })

const newNum = []

myNum.forEach( (num) => {
  if(num > 5) {
    newNum.push(num);
  }
})

console.log(newNum);