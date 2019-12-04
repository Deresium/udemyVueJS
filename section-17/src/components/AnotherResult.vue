<template>
    <div>
        <p>Counter is: {{ doubleCount }}</p>
        <p>Number of Click: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters('counter',{ // ES6 spread syntax https://medium.com/javascript-in-plain-english/es6-spread-parameter-vs-rest-operator-5e3c924c4e1f
                doubleCount: 'doubleCounter',
                stringCounter: 'stringCounter'
            }),
            /*ourOwn(){

            }*/
        }
    }
</script>