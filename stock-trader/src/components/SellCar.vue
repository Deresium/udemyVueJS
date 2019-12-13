<template>
    <div class="car">
        <div class="title">
            <span class="carName">{{ buyingCar.car.name }}</span> (Price: {{ buyingCar.car.price }} | Quantity: {{ buyingCar.quantity }})
        </div>
        <div class="selling">
            <label>
                Quantity:
                <input type="number" v-model.number="sellingQuantity"/>
            </label>
            <button @click="sellingCar" :disabled="sellingQuantity == null">Sell</button>
        </div>
    </div>
</template>

<script>
    import {axiosBase} from "../axios/axios-base";
    import BuyingCar from "../models/BuyingCar";

    export default {
        name: "SellCar",
        props:['buyingCar'],
        data(){
            return{
                sellingQuantity: null
            }
        },
        methods:{
            sellingCar(){
                if(this.sellingQuantity > 0 && this.sellingQuantity <= this.buyingCar.quantity){
                    const sellingCar = new BuyingCar(this.buyingCar, this.sellingQuantity);
                    axiosBase.post('/sellingCars.json', JSON.stringify(sellingCar))
                    .then(()=>{
                        this.$emit('sellCar', sellingCar);
                    })
                }else{
                    alert('You can\'t sell');
                }
            }
        }
    }
</script>

<style scoped>
    .car{
        margin-right: 5%;
        padding-bottom: 2%;
        background-color: lightblue;
        border-radius: 5%;
        width: 20%;
    }

    .title{
        padding: 5% 3% 5% 3%;
        background-color: royalblue;
        color: white;
    }

    .selling{
        padding-top: 5%;
        margin-left: 3%;
        color: darkblue;
    }

    .selling input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid darkblue;
        width: 25%;
        color: darkgreen;
    }

    .selling button{
        background-color: darkblue;
        color: white;
        border: none;
        cursor: pointer;
        padding: 2% 5% 2% 5%;
        margin-left: 5%;
        border-radius: 5%;
    }

    .selling button:hover{
        background-color: blue;
    }
</style>