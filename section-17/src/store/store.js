import Vue from 'vue';
import Vuex from 'vuex';
import counter from "./modules/counter/counter";
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    //not use directly mutations in components. Pass by actions.
    mutations,
    actions,
    modules:{
        counter
    }
});