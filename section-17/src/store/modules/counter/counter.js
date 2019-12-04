import * as actions from './actions'

const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return `${state.counter} Clicks`;
    }
};

const mutations = {
    increment: (state, payload) => {
        //you can't use asynchronous
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
};

export default {
    //ES6 create automaticly the key/value pairs,
    namespaced: true,
    state, //or state: state
    getters,
    mutations,
    actions
}