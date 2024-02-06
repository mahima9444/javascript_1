// singleton 
// Object.create

// object literals 

const mySym = Symbol("key1")

const Jsuser = {
    name : "Tanu",
    "full name": "Solanki Tanu",
    [mySym]: "mykey1",
    age : 15,
    location : "Surat",
    email : "tanu@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Staurday"]
}

// console.log(Jsuser["full name"]);
// console.log(Jsuser["email"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "tanu9444@gmail.com"
Object.freeze(Jsuser);
Jsuser.email = "tanu118@gmail.com"
// console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
