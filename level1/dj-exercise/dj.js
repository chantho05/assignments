// event listener practice 


document.getElementById("square").addEventListener('mouseover', function(){

if (addEventListener){
    square.style.backgroundColor = "blue"
}
})

document.getElementById("square").addEventListener('mousedown',function(event){
    if(addEventListener){
        square.style.backgroundColor = "red"
        square.key
    }
})

document.getElementById("square").addEventListener('dblclick', function(){
    square.style.backgroundColor = "green"
})


document.getElementById("square").addEventListener('scroll', function(){
        square.style.backgroundColor = "orange"
    
})


document.getElementById("square").addEventListener('mouseup', function(){
    square.style.backgroundColor = "yellow"
})

document.getElementById("square").addEventListener('mouseout', function(){
    square.style.backgroundColor = "white"
})

//---------------------------------------------------------//


document.body.addEventListener('keydown', function(e){


if (e.key == "r"){
    document.getElementById("square").style.backgroundColor = "red"
    }if (e.key == "b") {
        document.getElementById("square").style.backgroundColor = "blue"
        }if (e.key == "y") {
            document.getElementById("square").style.backgroundColor = "yellow"
            }if (e.key == "o") {
                document.getElementById("square").style.backgroundColor = "orange"
                }if (e.key == "g"){
                    document.getElementById("square").style.backgroundColor = "green"

    }
})




/*  
    The square's color will change as follows:

- Blue when the mouse hovers over the square ------
- Red when the mouse button is held down over the square -----
- Yellow when the mouse button is let go over the square ------
- Green when the mouse is double clicked in the square -----
- Orange when the mouse scroll is used somewhere in the window (not just over the square).
    
    You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check out the key and keyCode property of `e.target`
    

Attempt these requirements. If you become discouraged, included are things to consider.

Take a minute to think through how you would implement all of these event listeners.

You will need a different event for each event. Keyboard events are triggered by any key.

`.addEventListener` will be called on your square 6 times.
*/   

