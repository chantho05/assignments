const person = { firstName: "Robert", lastName: "Jones", age: 37 }
let names = ["Jerry", "Adam"]

//select firstname from person ---> and push into names

let name = person.firstName.concat(names)

// ---> ideal approach 
//names.push(person.firstName)

// console.log(name)
































// // Write a function that takes a string as a parameter 
// // and returns the same string in all capital 
// // letters followed by all lowercase letters.

// function toUpper(str){
//     var upper = str.toUpperCase()
//     var lower = str.toLowerCase()

//     return lower
// }
// console.log(toUpper("hello"))
// // Write a function that takes a string as a parameter and returns a number that is 
// // half the string's length, rounded down.

// function middleIndex(str){
//     var middle = Math.floor((str.length) / 2)

//     return middle
// }
// console.log(middleIndex("Hello world"))

// // Write a function that uses slice() and the other functions you've
// //  written to return the first half of the given string.

// function cutting(str){
//     var cut = str.slice(0, 2)
//     return cut
// }
// console.log(cutting("Hello"))

// // Write a function that takes a string as a parameter and returns that string 
// // where the first half is capitalized, and the second half is lowercase.

// function firstHalf(str){
//     var slice = str.slice(0, middleIndex(str))
//     return slice
// }

// function secondHalf(str){
//     var slice = str.slice(middleIndex(str), (str.length))
//     return slice
// }

// function upperLower(str){
//     var first = firstHalf(str).toUpperCase()
//     var second = secondHalf(str).toLowerCase()

//     var combine = first.concat(second)

//     return combine
// }
// console.log(upperLower("hello"))

// function capitalize(str){

// }
// console.log(capitaize("hey friends! practice practice practice"))