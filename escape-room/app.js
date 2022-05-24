const readLine = require("readline-sync")
var key = false



//place into while loop
const name = readLine.question("Welcome to the Escape Room- What is your name? ")
console.log(name + " Why are you even here?!")
const options = readLine.keyIn("1. Put your hand in the hole, 2. Open the Door, 3. Find the key ")



//while is game true ------- 

if(options === "1"){
    console.log(name + " You just died, OH NO!!!")

}
 
if(options === "2"){
    if(key == true){
    console.log(name + " I cant believe you actually made it out of here")
}else{
    console.log(name + " You need to find the key first!")
}
}
 
if(options === "3"){
        console.log("After looking around for hours i finally see something sparkling in the distance")
        key = true
        console.log("I have found the key!!!")
}







