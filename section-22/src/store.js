import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from "./axios-auth";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData){
            state.idToken = userData.token;
            state.userId = userData.userId;
        },
        storeUser(state, user){
            state.user = user;
        },
        clearAuthData(state){
            state.idToken = null;
            state.userId = null;
        }
    },
    actions: {
        setLogoutTimer({dispatch}, expirationTime){
            setTimeout(()=>{
                dispatch('logout');
            }, expirationTime * 1000);
        },
        signup({commit, dispatch}, authData){
            axiosInstance.post('/accounts:signUp?key=AIzaSyAKTAq97IkW0yyHEtsDEEc7_oShhg6sKJM', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
                .then(response => {
                    console.debug(response);
                    commit('authUser', {
                        token: response.data.idToken,
                        userId: response.data.localId
                    });
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
                    localStorage.setItem('token', response.data.idToken);
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('expirationDate', expirationDate);
                    dispatch('storeUser', authData);
                    dispatch('setLogoutTimer', response.data.expiresIn);
                })
                .catch(error => console.debug(error));
        },
        login({commit, dispatch}, authData){
            axiosInstance.post('/accounts:signInWithPassword?key=AIzaSyAKTAq97IkW0yyHEtsDEEc7_oShhg6sKJM', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
                .then(response => {
                    console.debug(response);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
                    localStorage.setItem('token', response.data.idToken);
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('expirationDate', expirationDate);
                    commit('authUser',{
                        token: response.data.idToken,
                        userId: response.data.localId
                    });
                    dispatch('setLogoutTimer', response.data.expiresIn);
                })
                .catch(error => console.debug(error));
        },
        tryAutoLogin({commit}){
            const token = localStorage.getItem('token');
            if(!token){
                return
            }
            const expirationDate = localStorage.getItem('expirationDate');
            const now = new Date();
            if(now >= expirationDate){
                return
            }
            const userId = localStorage.getItem('userId');
            commit('authUser', {
                token: token,
                userId: userId
            });
        },
        logout({commit}){
          commit('clearAuthData');
          localStorage.removeItem('expirationDate');
          localStorage.removeItem('userId');
          localStorage.removeItem('token');
          router.replace('/signin');
        },
        storeUser({state}, userData){
            if(!state.idToken){
                return
            }
            axios.post(`/users.json?auth=${state.idToken}`, userData)
                .then(res => console.debug(res))
                .catch(error => console.debug(error));
        },
        fetchUser({commit, state}){
            if(!state.idToken){
                return
            }
            axios.get(`/users.json?auth=${state.idToken}`)
                .then(response => {
                    console.debug(response);
                    const data = response.data;
                    const users = [];
                    for(let key in data){
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.debug(users);
                    commit('storeUser', users[0]);
                })
                .catch(error => console.debug(error));
        }
    },
    getters: {
        user: state => state.user,
        isAuthenticated(state){
            return state.idToken !== null
        }
    }
})