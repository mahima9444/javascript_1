//******** for of **********

let arr = [1, 2, 3, 4, 5];

for (const val of arr) {
    // console.log(val);
}

let string1 = "hello world"

for (const str of string1) {
    // if(str == " "){
    //     break;
    // }
    // console.log(`each characte of string: ${str}`);
}

let string2 = "abcd"

for (const str in string2) {
    // if(str == " "){
    //     break;
    // }
    // console.log(`each characte of string: ${str}`);
}

// maps

const map = new Map()
map.set("1", "one")
map.set("2", "two")
map.set("3", "three")
// map.set(3, "three")
map.set("4", "three")

// console.log(map);


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


//******** for in **********

const myObject = {
    js: "javascript",
    rb: "ruby",
    cpp: "C++"
}

// Object is not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

for (const key in myObject) {
//    console.log(key);
// console.log(myObject[key]);
// console.log(`${key} shortcut for ${myObject[key]}`);
}

const array1 = ["A", "B", "C", "D"]

for (const [key, value] of array1) {
    console.log(key);
    //    console.log(key, ':-', value);
    // console.log(array1[key]);
}

for (const key in map) {
//    console.log(key);
}