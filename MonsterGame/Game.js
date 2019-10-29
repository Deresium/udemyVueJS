class Game{
    constructor(){
        this.inGame = false;
        this.players = [
            new Player('You'),
            new Player('Monster')
        ];
        this.logs = [];
    }

    getLogs(){
        return this.logs;
    }

    startGame() {
        this.inGame = true;
        this.logs = [];
        for (let i = 0; i < this.players.length; ++i) {
            this.players[i].fullLife();
        }
    }

    addLog(text, isMe){
        this.logs.unshift(new Log(text, isMe));
    }

    hitRound(min, max){
        const myDmg = this.getPlayer().hit(min, max, this.getMonster());
        const monsterDmg = this.getMonster().hit(min, max, this.getPlayer());

        this.addLog(`You hit the monster for ${myDmg}`, true);
        this.addLog(`The monster hits you for ${monsterDmg}`, false);
    }

    healRound(){
        const heal = this.getPlayer().heal();
        const monsterDmg = this.getMonster().hit(5, 15, this.getPlayer());
        this.addLog(`You heal you for ${heal} hp`, true);
        this.addLog(`The monster hits you for ${monsterDmg}`, false);
    }

    isInGame(){
        return this.inGame;
    }

    endGame(){
        this.inGame = false;
    }

    getPlayer(){
        return this.players[0];
    }

    getMonster(){
        return this.players[1];
    }

    getNbPlayers(){
        return this.players.length;
    }

    getPlayers(){
        return this.players;
    }

    checkEndGame(){
        for (let i = 0; i < this.players.length; ++i) {
            if (this.players[i].isDead()) {
                this.inGame = false;
                return true;
            }
        }
        return false;
    }
}