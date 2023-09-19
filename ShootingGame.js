// declare player 1 dan player 2


class Player {
    constructor(_name, _health = 100, _power = 10){
        this.name = _name;
        this.health = _health;
        this.power = _power;
    };

    useItem = (item) => {
        // "hp 10";
        let a = item.split(" ");
        if(a[0] === "hp"){
            // return this.health += parseInt(a[1]);
            return `Get Item = ${item}. | Result = ${this.health += parseInt(a[1])} Health`;
        }
        else if(a[0] === "pow"){
            // return this.power += parseInt(a[1]);
            return `Get Item = ${item}. | Result = ${this.power += parseInt(a[1])} Power`;
        }
    }

    hit = (power) => {
        this.health = this.health - power;
        // return this.health = this.health - power;
        // return this.health;
    }

    // status = [];
    statusString = "";

    showStatus = () => {
        // this.status.push({})
        this.statusString = `${this.name}. (Health = ${this.health} | Power = ${this.power})`
        return this.statusString;
    }
}

class ShootingGame {
    constructor(_player1, _player2){
        this.Player1 = _player1;
        this.Player2 = _player2;

        // console.log(this.Player1.health);
        // console.log(this.Player2.health);
    };

    
    getRandomItem = () => {
        let random = Math.floor(Math.random() * 4);
        if (random === 0){
            // return item.hp1;
            return "hp 10";
        }
        else if (random === 1){
            return "hp 0";
        }
        else if (random === 2){
            return "pow 10";
        }
        else if (random === 3){
            return "pow 0";
        }
    }


    // start = showstatus(), getrandomitem(), useitem(), showstatus(), hit(), showstatus()
    start = () => {
        console.log(this.Player1.health > 0 && this.Player2.health > 0);
        while(this.Player1.health > 0 && this.Player2.health > 0){
            
            // showStatus()
            console.log(`---Before---\n${this.Player1.showStatus()}, ${this.Player2.showStatus()}`);
            // useItem() getRandomItem()
            console.log(`---Use Item---\nPlayer 1. ${this.Player1.useItem(this.getRandomItem())} \nPlayer 2. ${this.Player2.useItem(this.getRandomItem())}`);
            // showStatus()
            console.log(`---After Use Item---\n${this.Player1.showStatus()} || ${this.Player2.showStatus()}`);
            // hit()
            this.Player1.hit(this.Player2.power);
            this.Player2.hit(this.Player1.power);
            // showStatus()
            console.log(`---After Hit---\n${this.Player1.showStatus()}, ${this.Player2.showStatus()}`);

        }

        if(this.Player1.health > this.Player2.health){
            return `${this.Player1.showStatus()}, ${this.Player2.showStatus()}\nWinner : Player 1`
        }
        else{
            return `${this.Player1.showStatus()}, ${this.Player2.showStatus()}\nWinner : Player 2`
        }
        // return 1;
    }
}


let newPlayer1 = new Player ("Budi");
// // console.log(newPlayer1.health);

let newPlayer2 = new Player ("Bude");
// // console.log(newPlayer2);

let newGame1 = new ShootingGame(newPlayer1, newPlayer2);
console.log(newGame1.start());


// let newPlayer3 = new Player ("PA");
// let newPlayer4 = new Player ("Injoker");

// let newGame2 = new ShootingGame(newPlayer3, newPlayer4);
// console.log(newGame2.start());