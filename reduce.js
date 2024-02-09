let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = myNum.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and current value is: ${currval}`);
    return acc + currval
})

console.log({total});