function myFunction() {
  console.log("h");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("o");
}

// myFunction()

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumber(num1, num2) {
  // let result = num1 + num2
  // return result
  return num1 + num2;
}

// addTwoNumber(3, "a");

const result = addTwoNumber(3, 4);

// console.log("Result: ", result);

function loginUserMessage(username = "tanu") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("tanu"));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1){
//     return num1
// }

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 1000));

const user = {
    username: "xyz",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "abc",
    price: 344
})

const myNewArray = [200, 400, 100, 500]

function returnSecondVaalue(getArray){
    return getArray[1]
}

console.log(returnSecondVaalue(myNewArray));

