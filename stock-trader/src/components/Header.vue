<template>
    <div class="headerDiv">
        <div class="headerLink">
            <router-link to="/" tag="div" active-class="active" title="home" exact>Home</router-link>
            <router-link to="/portfolio" tag="div" active-class="active" title="portfolio">Portfolio</router-link>
            <router-link to="/stock" tag="div" active-class="active" title="stock">Stock</router-link>
        </div>
        <div>
            <p>Funds: {{ funds }}</p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Header",
        computed:{
            ...mapGetters('stock',{
                funds : 'stringFunds'
            })
        }
    }
</script>

<style scoped>
    .headerDiv{
        background-color: rgba(190,190,190,0.5);
        display: flex;
        justify-content: space-between;
        padding-left: 2%;
        padding-right: 2%;
    }

    .headerLink{
        display: flex;
        align-items: center;
    }

    .headerLink > div {
        margin-right: 50%;
        padding: 5%;
        border-radius: 10%;
        cursor: pointer;
    }

    .headerLink > div.active{
        background-color: rgba(176,176,176,0.8);
    }
</style>