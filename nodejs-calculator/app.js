const { keyIn } = require("readline-sync")
const readLine = require("readline-sync")


const num1 = readLine.question("Please enter your first number: ")
const num2 = readLine.question("Please enter your second number: ")

const operator = readLine.keyIn("do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply?")

if(operator === "a"){

    let result = parseInt(num1) + parseInt(num2)
    console.log(result)
}if (operator === "s") {

    let result = parseInt(num1) - parseInt(num2)
    console.log(result)
}if (operator === "d") {

    let result = parseInt(num1) / parseInt(num2)
    console.log(result)
}if (operator === "m") {

    let result = parseInt(num1) * parseInt(num2)
    console.log(result)
}
