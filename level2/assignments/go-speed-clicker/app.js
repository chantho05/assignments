let num = 0;

if (localStorage.getItem('click') !== null) {
    num = Number(localStorage.click);
}

const pageClicked = () => {
    num++;
    localStorage.setItem("click", num);
    console.log(num);
}

window.addEventListener("click", pageClicked);
localStorage.clear()