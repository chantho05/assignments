// * 3 states of a promise:
// * 1:  <Pending>
// * 2:  Resolved    .then()
// * 3:  Rejected    .catch()


function flipCoin() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 2)

        if (randomNum === 0) {
            resolve("Heads")
        } else if (randomNum === 1) {
            reject("Tails")
        }

    })
}
flipCoin()
    .then(response => console.log("RESOLVED: " + response))
    .catch(error => console.log("REJECTED: " + error))


// --------------------------------------------------------

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello World"), 3000)
    })
}

getData()
    .then(resolved => console.log(resolved))
    .catch(err => console.log(err))



// Fetch also uses promises and is widely used for http requests

// example

// fetch("https://rickandmortyapi.com/api/character")
//     .then(res => res.json())
//     .then(res => console.log(res.results))
//     .catch(err => console.log(err))