// 1) Make an array of numbers that are doubles of the first array


const doubleNumbers = ([2, 5, 100]);

const result = doubleNumbers.map(function(num) {
    return num * 2
})
console.log(result)

// 2) Take an array of numbers and make them strings

const stringItUp = ([2, 5, 200])

const strings = stringItUp.map(function(arr) {
    return arr + ""
})
console.log(strings)

// 3) Capitalize the first letter of each name and make the rest of the 
// characters lowercase

const capitalizeNames = (["john", "JACOB", "jinGleHeimer", "schmidt"]);

const firstCap = capitalizeNames.map(function(cap) {
    return cap.charAt(0).toUpperCase() + cap.substring(1)
})
console.log(firstCap)

// 4) Make an array of strings of the names


const namesOnly = ([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);

const fullNames = namesOnly.map(function(names) {
    return names.name
})
console.log(fullNames)

// 5) Make an array of strings of the names saying whether
//  or not they can go to The Matrix


const makeStrings = ([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);

const allowed = makeStrings.map(function(permission) {
    if (permission.age < 18) {
        return permission.name + " CANNOT see the Matrix!"
    } else {
        return permission.name + " CAN go see the Matrix!"
    }
})
console.log(allowed)

// Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr) {
    return arr.map(function(obj) {
        return "<h1>" + obj.name + "</h1>" + "<h2>" + obj.age + "</h2>";
    });
}

var resulted = readyToPutInTheDOM([{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }]);
console.log(resulted);