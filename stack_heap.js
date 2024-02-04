//stack and heap memory

// stack (primitive) get copy - changes made in copy will not affect origin
// heap(non-primitive) get reference - changes made in copy will affect origin


let myYoutubename = "tanu@gmail.com"

let anothername =  myYoutubename

anothername = "chaiourcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);