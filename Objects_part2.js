// ********** objects part 2 ************

// const tinderUser = new Object(), this is singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.naem = "xyz"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "tanu",
            lastname: "solanki"
        }    
    }
}

// console.log(regularUser.fullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
     {
        id: 2,
        email: "abc@gmail.com"
    },
     {
        id: 3,
        email: "abc@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));