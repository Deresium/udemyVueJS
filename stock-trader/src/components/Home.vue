<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new one</p>
        <p>Your Funds: {{ funds }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Home",
        computed:{
            ...mapGetters('stock',{
                funds: 'stringFunds'
            })
        }
    }
</script>

<style scoped>

</style>