// Immediately invoke function expression (IIFE)

(function one() {
  // named IIFE
  // console.log(`hello`);
})();

((name) => {
  // console.log(`hello world ${name}`);
})("tanu");

function OddNumbers(n) {
  let begin = 1;
  const oddNums = [];

  for (let i = 0; i < n; i++) {
    oddNums.push(begin);
    begin += 2;
  }
  return oddNums;
}
console.log(OddNumbers(7));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    array2.push(array[i]);
    // console.log(array2);
  }
}
// console.log(`odd number:`, array2);

const array3 = [55, 33, 99, 11, 7];
let min = [...array3]
function find(array3) {
    let smallest = array3[0]; 
    for (let i = 1; i < array3.length; i++) {
        if (array3[i] < smallest) {
            smallest = array3[i]; 
        }
    }
    return smallest;
}
const smallestValue = find(array3);
console.log("smallest value is:", smallestValue);

console.log(Math.min.array3);