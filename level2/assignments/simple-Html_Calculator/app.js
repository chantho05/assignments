const form = document["calc-form"]

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const addFirst = form.addFirst.value
    const addSecond = form.addSecond.value


    form.addFirst.value = " "
    form.addSecond.value = " "

    const h2 = document.createElement("h2")
    h2.textContent = parseInt(addFirst) + parseInt(addSecond)


    document.body.append(h2)
})


form.addEventListener("submit", function(event) {

    const subOne = form.subOne.value
    const subTwo = form.subTwo.value


    form.subOne.value = " "
    form.subTwo.value = " "

    const sub = document.createElement("h2")
    sub.textContent = parseInt(subOne) - parseInt(subTwo)


    document.body.append(sub)
})



form.addEventListener("submit", function(event) {
    const multiOne = form.multiplyOne.value
    const multiTwo = form.multiplyTwo.value

    // form.multiOne.value = " "
    // form.multiTwo.value = " "

    const multi = document.createElement("h2")
    multi.textContent = parseInt(multiOne) * parseInt(multiTwo)


    document.body.append(multi)

})