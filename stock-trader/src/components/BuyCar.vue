<template>
    <div class="car">
        <div class="title">
            <span class="carName">{{ car.name }}</span> (price: {{ car.price }})
        </div>
        <div class="buying">
            <label>
                <span>Quantity: </span>
                <input type="number" v-model.number="quantity"/>
            </label>
            <button @click="buyCar" :disabled="quantity == null">Buy</button>
        </div>
    </div>
</template>

<script>
    import BuyingCar from "../models/BuyingCar";
    import {axiosBase} from "../axios/axios-base";

    export default {
        name: "BuyCar",
        props:['car'],
        data(){
            return{
                quantity: null
            }
        },
        methods:{
            buyCar(){
                if(this.quantity > 0){
                    const buyingCar = new BuyingCar(this.car, this.quantity);
                    axiosBase.post('/buyingCars.json', JSON.stringify(buyingCar))
                    .then(()=>{
                        this.$emit('buyCar', buyingCar);
                        this.quantity = null;
                    })
                    .catch(error => console.debug(error));
                }
            }
        }
    }
</script>

<style scoped>
    .car{
        margin-right: 5%;
        padding-bottom: 2%;
        background-color: lightgreen;
        border-radius: 5%;
        width: 20%;
    }

    .title{
        padding: 5% 3% 5% 3%;
        background-color: forestgreen;
        color: white;
    }

    .buying{
        padding-top: 5%;
        margin-left: 3%;
        color: darkgreen;
    }

    .buying input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid darkgreen;
        width: 25%;
        color: darkgreen;
    }

    .buying button{
        background-color: darkgreen;
        color: white;
        border: none;
        cursor: pointer;
        padding: 2% 5% 2% 5%;
        margin-left: 5%;
        border-radius: 5%;
    }

    .buying button:hover{
        background-color: green;
    }
</style>