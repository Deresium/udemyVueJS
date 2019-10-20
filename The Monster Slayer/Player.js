class Player{
    constructor(name){
        this.name = name;
        this.hp = 100;
    }

    hit(min, max){
        return Math.floor(Math.random() * max) + min;
    }

    receiveHit(damage){
        this.hp -= damage;
    }

}