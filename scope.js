function one() {
  const username = "John";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

// one()

if (true) {
  const username = "John";
  if (username === "John") {
    const website = " youtube";
    // console.log(username + website);
  }
//   console.log(website);
}
// console.log(username); 

// ************ interesting *************

addone(5)
function addone(num){
    return num + 1
}

// it's called hoisting

// addTwo(5) we can't access this fun
const addTwo = function(num) {
    return num + 2 
}

console.log(addTwo(5)); 