// const { default: axios } = require("axios");

const form = document["todoform"]
const submitBtn = document.getElementById("submit")

function getData() {
    axios.get("https://api.vschool.io/MichaelDavis/todo/")
        .then(res => listData(res.data))
        .catch(err => console.log(err))

}



function listData(data) {
    document.getElementById("todo-list").innerHTML = ""
    clearList()

    for (let i = 0; i < data.length; i++) {
        const todo = document.createElement("h1")
        todo.textContent = data[i].title
        document.getElementById('todo-list').appendChild(todo)

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("checkBox")
        document.getElementById('todo-list').appendChild(checkbox)

        const remove = document.createElement("button")
        remove.classList.add("removeBtn")
        remove.textContent = "X"
        document.getElementById('todo-list').appendChild(remove)



        remove.addEventListener("click", function() {

            axios.delete(`https://api.vschool.io/MichaelDavis/todo/${data[i]._id}`)
                .then(res => getData(res.data))
                .catch(err => console.log("Unsuccessful at this time"))
        })

        checkbox.addEventListener("click", function(event) {

            const updated = {
                completed: true
            }

            if (event.target.checked) {
                todo.style.textDecoration = "line-through"
            } else {
                updated.completed = false
                todo.style.textDecoration = "none"
            }

            axios.put(`https://api.vschool.io/MichaelDavis/todo/${data[i]._id}`, updated)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        })
    }
}

function clearList() {
    const list = document.getElementById("todo-list")
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

getData()


submitBtn.addEventListener("click", function(event) {
    event.preventDefault()

    console.log("clicked")


    const newItem = {
        title: form.title.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value,
        price: form.price.value
    }

    form.title.value = ""
    form.description.value = ""
    form.imgUrl.value = ""
    form.price.value = ""


    axios.post("https://api.vschool.io/MichaelDavis/todo/", newItem)
        .then(res => getData())
        .catch(err => console.log(err))

})