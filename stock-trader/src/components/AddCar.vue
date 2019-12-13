<template>
    <form>
        <label>
            <span>Name: </span>
            <input v-model="carName" type="text" size="64"/>
        </label>
        <button @click.prevent="addCar(carName)" :disabled="carName == null">Add</button>
    </form>
</template>

<script>
    // import {mapActions} from 'vuex';
    import {axiosBase} from '../axios/axios-base';
    import Car from "../models/Car";

    export default {
        name: "AddCar",
        data(){
            return{
                carName: null
            }
        },
        methods:{
            /*...mapActions('car',{
                addCar: 'addCar'
            })*/
            addCar(){
                const price = Math.floor(Math.random() * 950) + 50;
                const car = new Car(this.carName, price);
                axiosBase.post('/cars.json', JSON.stringify(car))
                .then(() => this.$emit('addCar', car))
                .catch(error => console.debug(error));
            }
        }
    }
</script>

<style scoped>

</style>