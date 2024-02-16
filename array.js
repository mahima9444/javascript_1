// array 

const myArr = [0, 1, 2, 3, 4, 5, 6, 7]

const name = ["abc", "xyz", "pqr", "stu"]

const myArr2 = [11, 12, 13, 14, 15]
// console.log(myArr2[1]);

// methods 

// myArr.push(8)
// myArr.push(9)
// myArr.push(10)
// myArr.pop()
// myArr.unshift(11)
myArr.shift()

// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr2.indexOf(14));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice 

// console.log("A ", myArr);
const myn1 = myArr.slice(1, 4)
// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 4)

// console.log(myn2);
// console.log("C ", myArr);

// **** part-2 *****

const arr1 = ['A', 'B', 'C', 'D']
const arr2 = ['P', 'Q', 'R']
// arr1.push(arr2)

// console.log(arr1);
// console.log(arr1[4][0]);

const arr3 = arr1.concat(arr2)
// console.log(arr3);

const arr4 = [...arr1, ...arr2, ...myArr2]
// console.log(arr4);

const arr5 = [1, 2, 3, [4, 5, 6], 7, [11, 12, [13, 14]]]
const arr7 = [1, 2, 3, [4, 5, [110], 6], 7, [11, 12, [13, 14]]]

const arr6 = arr5.flat(1)
// console.log(arr6);

// console.log(Array.isArray("tanu"));
// console.log(Array.from("tanu"));

// interesting
// console.log(Array.from({name: "tanu"}));
    
let score1 = 100 
let score2 = 200 
let score3 = 300 

// console.log(Array.of(score1, score2, score3));

// array find and search methods

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Mango");
let position1 = fruits.lastIndexOf("Apple");

// returns the position of the last occurrence of the specified element.

// console.log(position1);
// console.log(fruits.includes("Mango"));

const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// console.log(arr.copyWithin(-3, 0))

// every()

// The every() method checks if all the array elements pass the given test function.

const ageArray = [3, 5, 5, 2, 3, 9, 18]

function checkAge(age){
    return age>= 18;
}

let check = ageArray.every(checkAge)

// The some() method tests whether any of the array elements pass the given test function.


// let check = ageArray.some(checkAge)


// console.log(check);

let languages = ["JavaScript", "Java", "Python"];

// let constructor = languages.constructor;

let iterator = languages.entries();
for (let entry of iterator) {
  console.log(entry);
}