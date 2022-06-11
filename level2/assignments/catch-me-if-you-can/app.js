// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type 
// number:

// 1b) Call the sum function inside a try block using "1" and "2" as 
// arguments. Use console.log within 
// a catch block to inform the user of the error.

function sum(x, y) {
    try {
        if (x !== Number(x)) {
            throw "Add a number for X"
        }
        if (y !== Number(y)) {
            throw "add a number for Y"
        }
        return x + y;
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Code has ran through")
    }

}
console.log(sum(1, 2))

// 2a) Given a user object, write a function called login
//  that takes a username and password as parameters. 
// Throw an error if either of them don't match. Otherwise,
//  log to the console a message saying "login successful!"

var user = { username: "sam", password: "123abc" };

function login(username, password) {
    try {
        if (user.username !== username) {
            throw "Invalid Username! Pleast try again"
        }
        if (user.password !== password) {
            throw "Invalid Password, Try again!"
        } else {
            throw "Login Successful"
        }
    } catch (err) {
        console.log(err)
    } finally {
        console.log("code ends")
    }
}

console.log(login("sam", "123abc"))