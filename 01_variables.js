//let const & var

const accountID = 144553
let accountEmail = "tanu9444@google.com"
var accountPassword = "12345"
accountCity = "Surat"

// accountID = 2  not allpwed

console.log("accountID");

accountEmail = "abc@google.com"
accountPassword = "121212"
accountCity = "Bengaluru"

let accountState;
/*
prefer not to use var beacuse of issue in block scope and functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity, accountState])

