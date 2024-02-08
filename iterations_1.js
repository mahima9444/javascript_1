// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

for (let i = 1; i<= 10; i++) {
    // console.log(`our loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //    console.log(`inner loop value ${j} and inner loop ${i}`);
    //    console.log(i + '*' + j + '=' + i*j);   
    }
}

// let myArray = ["abc", "pqr", "xyz"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue 

// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`value of i is ${index}`);
// }


// let myArray = [1,2,3,4,5,6,7,8,9,10]


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