const { keyIn } = require("readline-sync")
const { setDefaultOptions } = require("readline-sync")
const readLine = require("readline-sync")
const playerName = readLine.question("What is your name? ")

console.log("Greetings and thank you for attending! " + playerName + " The day is quiet, it is raining outside and their is no sunlight in sight. The hair stands up on the back of your neck as you know today is going to change your life forever...but....why...")


const playerObject = {
    name: playerName,
    hp: 20,
    minAttack: 1,
    maxAttack: 5,
    inventory: ["Light Potion", "Great Potion", "Master Potion"]
}

const initialEnemy = [{
    name: "Ruben",
    hp: 20,
    minAttack: 1,
    maxAttack: 5,
    inventory: "potion",
}, {
    name: "Daryl",
    hp: 20,
    minAttack: 1,
    maxAttack: 5,
    inventory: "potion",
}, {
    name: "Russel",
    hp: 20,
    minAttack: 1,
    maxAttack: 5,
    inventory: "potion",
}]


function walk() {
    const moving = readLine.keyIn("To move foward please press" + " W")

    let walking = true

    while (walking === true) {
        if (moving === "w") {
            let spotted = Math.floor(Math.random() * 10)
            if (spotted > 5) {
                console.log("Seems awefully quiet, press [W] to continue walking")
                walk()
            } else {
                const answer = readLine.keyIn("Oh NO you have been spotted and they are coming to kill you!!! What are you going to do? stand and [f]ight or [R]un")
                if (answer === "f") {
                    fight(playerObject, initialEnemy)
                }
                let runOption = spotted
                if (answer === "r") {
                    if (runOption > 5) {
                        console.log("You ran away successfully")
                        walk()

                    } else {
                        console.log("You cannot leave NOW stay and FIGHT coward!")
                        fight(playerObject, initialEnemy)
                    }
                }
            }
            break
        }
    }
}
walk()


function damage(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

function fight(player, enemy) {
    let winner = false


    const randomEnemy = Math.floor(Math.random() * initialEnemy.length)
    let newEnemy = initialEnemy[randomEnemy].name
    let enemyHealth = initialEnemy[randomEnemy].hp
    let smallInt = initialEnemy[randomEnemy].minAttack
    let largeInt = initialEnemy[randomEnemy].maxAttack
    let ItemInventory = initialEnemy[randomEnemy].inventory
    let enemyItem = ItemInventory
    let fighter = newEnemy
    let minAttack = smallInt
    let maxAttack = largeInt
    let healthMeter = enemyHealth

    console.log(fighter + " Jumped out at you and is about to attack!")




    while (player.hp > 0 || enemyHealth > 0) {
        const option = readLine.keyIn(playerName + " Swing your sword by pressing " + "[S]" + " and ATTACK!!!")
        if (option === "s") {
            enemyHealth = enemyHealth - damage(player.minAttack, player.maxAttack)
            console.log(fighter + " only has " + enemyHealth + "HP left!")
            console.log(playerName + " has " + player.hp + "HP left!")


            if (enemyHealth <= 0) {
                enemyHealth = 0
                winner = true

                console.log("You have successfully defeated the enemy!!!")
            }
            while (winner === true) {
                console.log("You have picked up a " + enemyItem + " that " + fighter + " dropped!!")
                player.inventory = player.inventory.concat(enemyItem)
                playerInfo(playerObject)
                inventory(playerObject)
                walk()
            }
        }


        player.hp = player.hp - damage(player.minAttack, player.maxAttack)
        if (player.hp <= 0) {
            player.hp = 0
            console.log(playerName + " You have been killed!!!!")
            gameEnds()

        }
    }
}



function inventory(user) {
    const inventoryitem = readLine.keyIn("Would you like to open your inventory? Please press [Y] or [N]")
    if (inventoryitem === "y") {
        const itemSelector = inventoryitem
        console.log("select an item in your inventory!")
        let items = user.inventory

        for (var i = 0; i < items.length; i++) {
            console.log("--" + items[i] + "--")
        }
        const inventorySelector = readLine.keyIn("Select the Following: [1] - Light Potion [2] - Great Potion [3] - Master Potion")

        if (inventorySelector === "1") {
            let newHealth = user.hp += 10
            console.log(playerName + " your health has been increased by 10")
            console.log("Updated score is " + user.hp)
            user.inventory.pop([0])
        }
        if (inventorySelector === "2") {
            let newHealth = user.hp += 20
            console.log(playerName + " your health has been increased by 20")
            console.log("Updated score is " + user.hp)
        }
        if (inventorySelector === "3") {
            let newHealth = user.hp += 30
            console.log(playerName + " your health has been increased by 30")
            console.log("Updated score is " + user.hp)

        }
    }
    if (inventoryitem === "n") {
        walk()
    }
}


function playerInfo(user) {
    let name = user.name
    let health = user.hp
    let minAttk = user.minAttack
    let maxAttack = user.maxAttack
    let items = user.inventory
    const playerInfo = readLine.keyIn("Press [P] for current stats")
    if (playerInfo === "p") {
        console.log("Player name: " + name + " |" + " Health: " + health + " |" + " Min Damage: " + minAttk + " |" + " Max Attack: " + maxAttack + " |" + " Inventory: " + items)
    }
    return playerInfo
}


function gameEnds() {
    process.exitCode = 1
    console.log("HAHA I knew you would not be able to last, ugh..what a discrace to your family......Pathetic!")
    process.exit(1)
}