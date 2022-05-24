const readLine = require("readline-sync")

// const userName = readLine.question("What is your name? ")
// console.log("Hi " + userName + ", Goodmorning")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "her"
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]. name + " is not old enough to see Mad Max, Dont let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in")
    }else{

        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "him"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]. name + " is old enough to see Mad Max, You can let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in")
}
}