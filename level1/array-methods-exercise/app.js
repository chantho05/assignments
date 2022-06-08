var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 1. Remove the last item from the vegetable array.
    vegetables.pop()
    // console.log(vegetables)
    // -----> [ 'carrot', 'tomato', 'pepper' ]

// 2. Remove the first item from the fruit array.
    fruit.shift()

    // ------> [ 'apple', 'orange', 'watermelon' ]

// 3. Find the index of "orange."
    var fruits = fruit.indexOf("orange")
    // console.log(fruit)
    //-----> 1
 
    
// 4. Add that number to the end of the fruit array.
    fruit.push(fruits)
    // console.log(fruit)

// 5. Use the length property to find the length of the vegetable array.
    // console.log(vegetables.length)
//---------> 3

// 6. Add that number to the end of the vegetable array.
    vegetables.push(3)
    // console.log(vegetables)
    //----> [ 'carrot', 'tomato', 'pepper', 3 ]

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables)
    // console.log(food)
//----> [ 'apple', 'orange', 'watermelon', 1, 'carrot', 'tomato', 'pepper', 3 ]

// 8. Remove 2 elements from your new array starting at index 4 with one method.
    // var newFood = 
    food.splice(4, 2)
    // console.log(food)
//------> [ 'apple', 'orange', 'watermelon', 1, 'pepper', 3 ]

// 9. Reverse your array.
    food.reverse()
    // console.log(food)
//----->[ 3, 'pepper', 1, 'watermelon', 'orange', 'apple' ]

// 10. Turn the array into a string and return it.
    let newFoods = food
    let foodToString = newFoods.toString()

    console.log(foodToString)
//---->3,pepper,1,watermelon,orange,apple