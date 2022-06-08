// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)
// var result = document.querySelector("ol#favorite-things > li")
// console.log(result)


// querySelectorAll
// Select all elements from the page that match the query.
var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))

for(var i = 0; i < result.length; i++){
    result[i].textContent = "** DANGER **"
}


//forloops
// var powerRangers = [
//     "Jason Lee Scott", 
//     "Kimberly Hart", 
//     "Zack Taylor", 
//     "Trini Kwan", 
//     "Billy Cranston",
//     "Tommy Oliver"
// ]

// var rangersList = document.getElementById("rangers")

// for (var i = 0; i < powerRangers.length; i++) {
//     var newName = document.createElement("li")
//     newName.textContent = powerRangers[i]
//     rangersList.append(newName)
// }

// var powerRangers = [
//     "Jason Lee Scott", 
//     "Kimberly Hart", 
//     "Zack Taylor", 
//     "Trini Kwan", 
//     "Billy Cranston",
//     "Tommy Oliver"
// ]

// var rangersList = document.getElementById("rangers")

// for (var i = 0; i < powerRangers.length; i++) {
//     rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
// }

var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "Tommy Oliver"
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}