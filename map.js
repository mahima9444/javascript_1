let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.map((num) => {return num + 10} )

// Chaining 

const newNum = myNum.map((num) => num * 5).map((num) => num + 2).filter((num) => num >= 35)

// console.log({newNum});

let arr = ["tanu", "mahima", "abcde"]

function findlenght(arr) {
    // let newArr = [];
   
    let newArr = arr.map((item) => item.length)
    return newArr;

}
// let maxnum  = console.log(Math.max(arr.length))

// function maxlenght(array1) {
// array1.filter((item) => item.length = 6)
// return array1;
// }


console.log(findlenght(arr));

let names = ["tanu", "mahima", "abcde"];
// let names = [1, 3, 5, 7]
function getNames(names) {
     let max = Math.max(...names)
    //  let max = Math.max.apply(Math, names)
console.log(max);

  return names.filter(name => name.length > 5);
}

console.log(getNames(names));