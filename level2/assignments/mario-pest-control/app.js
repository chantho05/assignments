const form = document["pest_control"]

form.addEventListener("submit", function(event) {
    event.preventDefault()

    //baddies information w/values

    const goombas = form.goombasCaught.value
    const bombs = form.bombsCaught.value
    const cheeps = form.cheepsCaught.value

    let goombaPrice = ((goombas) * 5)
    let bombsPrice = ((bombs) * 7)
    let cheepsPrice = ((cheeps) * 11)


    // functionality to add a div containing the 
    // total of baddies and total cost

    const baddies = document.createElement("div")
    baddies.classList.add("total-baddies")
    baddies.textContent = parseInt(goombas) + parseInt(bombs) + parseInt(cheeps)
    const box = document.getElementById("all")
    box.appendChild(baddies)

    const cost = document.createElement("div")
    cost.classList.add("total-cost")
    cost.textContent = parseInt(goombaPrice) + parseInt(bombsPrice) + parseInt(cheepsPrice)
    const total = document.getElementById("all")
    total.appendChild(cost)


})