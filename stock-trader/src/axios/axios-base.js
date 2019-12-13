import axios from 'axios';
export const axiosBase = axios.create({
   baseURL:  process.env.VUE_APP_TRADER_FIREBASE_URL
});