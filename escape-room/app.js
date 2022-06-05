const readLine = require("readline-sync")

let key = false
let gameOver = false

const name = readLine.question("Welcome to the Escape Room- What is your name? ")
console.log(name + " Why are you even here?!")

while (!gameOver) {

    const options = readLine.keyIn("1. Put your hand in the hole, 2. Find the key, 3. Open the Door ")
    if (options === "1") {
        console.log(name + " You just died, OH NO!!!")
    }
    if (options === "2") {
        console.log("After looking around for hours i finally see something sparkling in the distance")
        key = true
        console.log("I have found the key!!!")
    }
    if (options === "3") {
        if (key) {
            gameOver = true
            console.log("you have opened the door!")
        } else if (key === false) {
            console.log(name + " You need to find the key first!")
        }
    }
}