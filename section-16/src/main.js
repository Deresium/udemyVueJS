import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import {routes} from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history', // no # style
    // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations for server config
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }
        if(to.hash){
            return{
                selector: to.hash
            }
        }
        return {
            x: 0,
            y: 0
        }
    }
});

//executed on each routing action
router.beforeEach((to, from, next)=>{
    console.log('global before each');
    next();
});


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
