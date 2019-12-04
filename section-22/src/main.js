import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-udemy-10864.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'test';
axios.defaults.headers.get['Accepts'] = 'application/json';

//interceptors = middlewares (need to return to not block)
const requestInterceptor = axios.interceptors.request.use(config =>{
  console.debug(`interceptor request: ${config}`);
  //config.headers.
  return config;
});

const responseInterceptor = axios.interceptors.response.use(response =>{
  console.debug(response);
  return response;
});

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
