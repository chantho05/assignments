const myForm = document.addItem

myForm.addEventListener("submit",(event) => {
    event.preventDefault()

    const title = myForm.title.value

    

    myForm.title.value = ""


    const listItem = document.createElement("li");
    listItem.textContent = title
    list.append(listItem)

    const space = document.createElement("br");
    space.textContent = title
    listItem.append(space)

    const edit = document.createElement("button")
    edit.textContent = "edit"
    listItem.append(edit)

    edit.addEventListener("change", (event) => {
        if(addEventListener){
            edit.textContent = ""
        }

        console.log("clicked")
    })

    const remove = document.createElement("button")
    remove.classList.add("remove-btn")
    remove.textContent = "X"
    listItem.append(remove)
    
    remove.addEventListener("click", (event) => {
        listItem.style.display = "none"
    })



}) 

