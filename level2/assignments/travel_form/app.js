const form = document["travel_form"]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.location.value

    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""

    const checked = []

    for (let i = 0; i < form.restrictions.length; i++) {
        if (form.restrictions[i].checked) {
            checked.push(form.restrictions[i].value)
        }
    }




    alert(` First Name: ${firstName}\n Last Name: ${lastName}\n Age: ${age}\n Gender: ${gender}\n Location: ${location}\n Dietary Restrictions: ${checked}`)


})