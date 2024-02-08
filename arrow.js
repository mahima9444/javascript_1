const user = {
    username: "tanu",
    age: 15,

    welcomeMessage: function () {
        console.log(`Welcome ${this.username}`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "abc"
// user.welcomeMessage()

// console.log(this);

//we can't use this in function 
// function one() {
//     username: "tanu";
//     console.log(this.username);
// }
// one()

const one = function () {
    username: "tanu";
    console.log(this.username);
}
one()

// const one = () => {
//     username: "tanu";
//     console.log(this);
// }
// one()

// const addone = (num1, num2) => {
//     return num1 + num2
// } 

// const addone = (num1, num2) => num1 + num2

// const addone = (num1, num2) => (num1 + num2)

const addone = (num1, num2) => ({username: "tanu"})

console.log(addone(8, 2))

const myArray = [2, 3, 4, 5, 6]

// myArray.forEach()