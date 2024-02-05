// dates 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCratedDate = new Date(2024, 7, 11)
// let myCratedDate = new Date(2024, 7, 11,11, 11)

// let myCratedDate = new Date("2024-02-14")

let myCratedDate = new Date("01-15-2023")

// console.log(myCratedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCratedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.toString());
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getTime());
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

newDate.toLocaleString('default', {
    weekday: "long"
})