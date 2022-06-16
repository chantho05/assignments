//Player stat
class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = hasStar
        this.gameON = true

    }

    //From created player below
    setName(namePicked) {
        this.name = namePicked
    }

    gotHit() {

        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else {
            this.status = "Dead"
            this.gameON = false
        }
    }

    gotPowerUp() {
        this.hasStar = false
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
            console.log("Your star has you protected")
        }


    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        console.log(`Star: ${this.hasStar}\n`)
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
    }
}

const user = new Player("Luigi")

const savePrincess = (user) => {
    //math.floor will not work
    let random = Math.ceil(Math.random() * 3)
    if (user.status === "Dead") {
        clearInterval(start)
    } else if (random === 1) {
        user.gotHit()
        user.print()
    } else if (random === 2) {
        user.addCoin()
        user.print()

    } else if (random === 3) {
        user.gotPowerUp()
        user.print()

    }
}
const start = setInterval(() => savePrincess(user), 1100)