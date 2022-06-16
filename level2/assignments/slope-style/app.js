// Use rest operator
// to help this function return an array of animals, no matter how many animals are passed to it:



function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
    // ["dog", "cat", "mouse", "jackolope", "platypus"]

// Write a function that returns a food object with the array names as properties. You'll use an ES6 
// shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and
//  value of properties in your object:

function combineFruit(fruit, sweets, vegetables) {
    return { fruit: fruit, sweets: sweets, vegetables: vegetables }
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))
    // //=> {
    //         fruit: ["apple", "pear"],
    //         sweets: ["cake", "pie"],
    //         vegetables: ["carrot"]
    //      }

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
}));
// -------------------------------------------------------------------------
// Use array destructuring to make this code ES6:

function returnFirst(...items) {
    const [first] = items
    return first
}

console.log(returnFirst(1, 7, 4, 6, 2, 3))

//---------------------------------------------------------------------------

// Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [one, two, three, four, five] = arr
    return `My top three favorite activities are, ${two}, ${three} and ${five}`
}

console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how 
// the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(real, magical, mysterious) {
    const newArray = [...real, ...mysterious, ...magical]
    return newArray
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Try to make the following function more ES6y:

function product(a, b, c, d, e) {
    const numbers = [a, b, c, d, e]

    return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1, 2, 3, 4, 5))


// Make the following function more ES6y. Use at least both the rest and spread operators:

function unshift(array, ...letterArray) {
    return array.concat(...letterArray)
}
console.log(unshift(["a", "b", "c", "d", "e"], ["a", "b", "c"]));

// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the 
// syntax look less redundant to simplify it:

function populatePeople(names) {
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = [...name]
        const person = {
            firstName,
            lastName
        }
        return person
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
    //[
    //  {firstName: "Frank", lastName: "Peterson"},
    //  {firstName: "Suzy", lastName: "Degual"},
    //  {firstName: "Liza", lastName: "Jones"},
    //]