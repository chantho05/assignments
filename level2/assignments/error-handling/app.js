// var input = "";

// try {
//     if (input == "") {
//         throw "Input can not be empty";
//     } else if (input.length > 5) {
//         throw "Input is to big";
//     } else {
//         console.log("You code runs fine!");
//     }
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log("Runs no matter what");
//     console.log("And the input was " + input);
// }

try {

    if (2 === 2) {
        throw new Error("Hey I am an error")
    }
    console.log("Did o copnsole.log")
} catch (err) {
    console.log(err)
} finally {
    console.log("I am running no matter what")
}