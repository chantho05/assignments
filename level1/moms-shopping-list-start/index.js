const myForm = document.addItem

myForm.addEventListener("submit",(event) => {
    event.preventDefault()

    const title = myForm.title.value

    

    myForm.title.value = ""


    const listItem = document.createElement("li");
    // listItem.textContent = title
    list.append(listItem)
    

    const space = document.createElement("p");
    space.textContent = title
    listItem.append(space)

    const edit = document.createElement("button")
    edit.textContent = "edit"
    listItem.append(edit)


//Edit and save feature in progress
    edit.addEventListener("click", (event) => {
    const editInput = document.createElement("input")
        listItem.append(editInput)
        editInput.value = space.textContent

        const submitBtn = document.createElement("button")
        submitBtn.textContent = "Save"
        listItem.append(submitBtn)

        submitBtn.addEventListener("click", (event) => {
            space.textContent = editInput.value
            submitBtn.remove()
            editInput.remove() 
        })
    
    })

    const remove = document.createElement("button")
    remove.classList.add("remove-btn")
    remove.textContent = "X"
    listItem.append(remove)
    
    remove.addEventListener("click", (event) => {
        listItem.remove()

    })



}) 

