<template>
    <div>
        <h2> Stock </h2>
        <sell-car v-for="(buyingCar, index) in buyingCars" :key="index" :buyingCar="buyingCar"/>
    </div>
</template>

<script>
    import {axiosBase} from "../axios/axios-base";
    import BuyingCar from "../models/BuyingCar";
    import SellCar from "./SellCar";

    export default {
        name: "Stock",
        data(){
            return{
                buyingCars: []
            }
        },
        components:{
            'sell-car': SellCar
        },
        mounted(){
            axiosBase.get('/buyingCars.json')
            .then(response => this.fillBuyingCarsList(response.data))
            .catch(error => console.debug(error));
        },
        methods:{
            fillBuyingCarsList(data){
                for(const key in data){
                    const jsonBuyingCar = data[key];
                    const buyingCar = new BuyingCar(jsonBuyingCar.car, jsonBuyingCar.quantity);
                    this.increaseQuantityFromCar(buyingCar);
                }
            },
            increaseQuantityFromCar(buyingCar){
                let foundCar = false;
                for(let i = 0; i < this.buyingCars.length; ++i){
                    if(this.buyingCars[i].car.name === buyingCar.car.name){
                        this.buyingCars[i].quantity += buyingCar.quantity;
                        foundCar = true;
                    }
                }
                if(!foundCar){
                    this.buyingCars.push(buyingCar);
                }
            }
        }
    }
</script>

<style scoped>

</style>