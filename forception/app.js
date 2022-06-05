var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var newArr = []


function forception(people, alphabet){

    for (var i = 0; i < people.length; i++){
        newArr.push(people[i])
    
        for (var j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j])
        }
    }return newArr
}
console.log(forception(people, alphabet))


//note to self, nested for loops will be in the same for loop without using the braces ---> {}