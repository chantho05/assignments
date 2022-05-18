//Header----------------------------
const h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
h1.className = "header"
document.getElementById("header").appendChild(h1);

const subTitle = document.createElement("h2")
subTitle.innerHTML = "<span class='name'>Michael</span> wrote the JavsScript";
document.getElementById("header").appendChild(subTitle)

//Bronze----------------------------
const messages = document.getElementsByClassName("message");
messages[0].textContent = "Are we still going on our date?";
messages[1].textContent = "Of course, are you excited?";
messages[2].textContent = "Absolutely";
messages[3].textContent = "I cant wait to see you!";


document.getElementById("clear-button").addEventListener("click", function(){
    for(var i = 0; i < messages.length; i++){
        if (addEventListener){
            messages[i].style.display = "none"
        }
    }
    console.log(messages)
})

//---------------------------------

document.getElementById("theme-drop-down").addEventListener("change", function(){
    this.classList.toggle("theme-two")
    if (this.addEventListener){
        document.body.style.backgroundColor = "red"
    }


    console.log("toggled")
})



