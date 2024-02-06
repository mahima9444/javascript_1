// destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseduration: "2 week",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); 

const {courseInstructor : instructor} = course  
const {price} = course
const {coursename} = course
const {courseduration} = course

console.log(instructor); 

// API

// {
//     "name": "hitesh",
//     "course": "js in hindi",
//     "price": "free",
//     "courseduration": "4 week",
// }