import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//register filter globally
Vue.filter('toLowercase', value => value.toLowerCase());

// It's add in every components (every created). It's COPY on every component.
// We can manipulate the data from the mixin without impact the other components who use it.
// Global mixin -> local mixin -> component behavior
Vue.mixin({
    created(){
        console.debug('global mixin created');
    },
    methods:{
        showAlert(){
            alert('test');
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')
