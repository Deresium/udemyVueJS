import Vue from 'vue';
import Vuex from 'vuex';
import stock from "./modules/stock/stock";
import car from "./modules/car/car";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        stock,
        car
    }
});