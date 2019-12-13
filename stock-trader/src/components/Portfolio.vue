<template>
    <div>
        <div class="carList">
            <buy-car v-for="(car, index) in cars" :key="index" :car="car" @buyCar="buyingCar"/>
        </div>
        <add-car @addCar="addCarToList"/>
    </div>
</template>

<script>
    import BuyCar from "./BuyCar";
    import AddCar from "./AddCar";
    import {axiosBase} from "../axios/axios-base";
    import Car from "../models/Car";

    export default {
        name: "Portfolio",
        components:{
            'buy-car': BuyCar,
            'add-car': AddCar
        },
        data(){
            return {
                cars: [],
                buyingCars: []
            }
        },
        mounted(){
            axiosBase.get('/cars.json')
            .then(response => this.fillCarList(response.data))
            .catch(error => console.debug(error));
        },
        methods:{
            addCarToList(car){
                this.cars.push(car);
            },
            fillCarList(data){
                for(const key in data){
                    const jsonCar = data[key];
                    const car = new Car(jsonCar.name, jsonCar.price);
                    this.cars.push(car);
                }
            },
            buyingCar(buyingCar){
                this.buyingCars.push(buyingCar);
            }
        }
    }
</script>

<style scoped>
    .carList{
        display: flex;
        flex-wrap: wrap;
        margin-top: 3%;
        margin-bottom: 3%;
    }
</style>