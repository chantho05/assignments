// import {get } from "axios"

const { default: axios } = require("axios");


//Used to make request via Http
// axios
// Promise based HTTP client for the browser and node.js
// Import 

// --------------------GET----------------------------


// axios.get('https://api.vschool.io/Michael/todo/')
//     .then(response => {
//         for (let i = 0; i < response.data.length; i++) {
//             const h1 = document.createElement('h1')
//             h1.textContent = response.data[i].title
//             document.body.append(h1)
//             console.log(response.data[i])
//         }
//     })
//     .catch(error => console.log(error))



// -------------------POST--------------------------
//request

// const form = document["todoform"]
// console.log(form)

// form.addEventListener("submit", function(event) {
//     event.preventDefault()

//     const newTodo = {
//         title: form.title.value,
//         description: form.description.value,
//         imgUrl: form.imgUrl.value
//     }
//     axios.post("https://api.vschool.io/Michael/todo/", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))

// })

// ------------------DELETE-------------------------

// axios.get("https://api.vschool.io/Michael/todo/")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// ------------------PUSH--------------------------

// if adding delete button

// const button = document.getElementById("delete-button")

// button.addEventListener("click", function(){
//     axios.get("https://api.vschool.io/Michael/todo/")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// }


// ----------------------PUT-------------------------

// const updates = {
//     title: "I ACTUALLY CHANGED THIS TITLE",
//     description: "Thats right!!!!!"
// }


// axios.get("https://api.vschool.io/Michael/todo/", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// Object.assign(person, updates)


// ------------------------------------------------------------------------------------
// ----------------Auto update a webpage on new data--------------------------------

// GET's THE TODO's FROM THE DATABASE
// function getData(){
//     axios.get("https://api.vschool.io/johnsmith2/todo")
//         .then(res => listData(res.data))
//         .catch(err => console.log(err))
// }



// // LISTS THE TODO TITLES TO THE DOM
// function listData(data){
//     // document.getElementById('todo-list').innerHTML = ""
//     // clearList()

//     for(let i = 0; i < data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = data[i].title
//         document.getElementById('todo-list').appendChild(h1)
//     }
// }

// function clearList(){
//     const el = document.getElementById('todo-list')
//     while(el.firstChild){
//         el.removeChild(el.firstChild)
//     }
// }

// getData()


// // FORM FOR THE POST REQUEST
// const todoForm = document["todo-form"]

// todoForm.addEventListener("submit", function(e){
//     e.preventDefault()

//     const newTodo = {
//         title: todoForm.title.value
//     }

//     todoForm.title.value = ""

//     axios.post("https://api.vschool.io/johnsmith2/todo", newTodo)
//         .then(res => getData())
//         .catch(err => console.log(err))
// })