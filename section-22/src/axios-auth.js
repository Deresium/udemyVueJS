import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-udemy-10864.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;