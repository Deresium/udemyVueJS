class Player{
    constructor(name){
        this.name = name;
        this.hp = 100;
    }

    normalHit(player){
        this.hit(1, 10, player);
    }

    specialHit(player){
        this.hit(10, 20, player);
    }

    fullLife(){
        this.hp = 100;
    }

    removeLogs(){
        this.hits = [];
    }

    heal(){
        const heal = this.getRandomBetween(5, 10);
        let realHeal = 0;
        if((this.hp+heal) > 100){
            realHeal = 100 - this.hp;
            this.hp = 100;
        }
        else {
            this.hp += heal;
            realHeal = heal;
        }
        return realHeal;
    }

    hit(min, max, player){
        const damage = this.getRandomBetween(min, max);
        player.hp -= damage;
        return damage
    }

    getRandomBetween(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    isDead(){
        return this.hp <= 0;
    }
}