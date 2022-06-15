// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure 
// this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned).
//  You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.

// let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    // console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a 
// function, and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", name: carrot }))

}
console.log(mapVegetables(carrots))

// VERY QUESTIONABLE

// Re-write this .filter() ’s callback function using an arrow function:

const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}
console.log(filterForFriendly(people))

// Re-write the following functions to be arrow functions:

let doMathSum = (a, b) => a + b

let produceProduct = (a, b) => a * b


console.log(doMathSum(2, 6))
console.log(produceProduct(2, 6))

// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters 
// and returns a string like the following:
// `firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`

// let person = {
//     firstName: "Kat",
//     lastName: "Stark",
//     age: 40
// }

function printString(firstName, lastName, age) {
    return "Hi " + firstName + lastName + " how does it feel to be " + age + "?"
}
console.log(printString("Kat ", "Stark", 40))
    // console.log(printString(person))
    // Hi Kat Stark, how does it feel to be 40?



// Use the shorthand syntax to make the following filter take up one line. Copy and paste the 
// array to test it.
const animals = [{
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog")
}

console.log(filterForDogs(animals))


// Using template literals, write a function that takes location and name parameters and outputs
//  a message formatted like this:
// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
// let traveler = {
//     firstName: "Janice",
//     travelTo: "Hawaii"
// }


const greetings = (location, name) => `Hi ${name || "Janice"}
Welcome to ${location || "Hawaii"}
I Hope you enjoy your stay. Please ask the president of ${location || "Hawaii"} if you need anything.`

console.log(greetings())