let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.map((num) => {return num + 10} )

// Chaining 

const newNum = myNum.map((num) => num * 5).map((num) => num + 2).filter((num) => num >= 35)

console.log(newNum);