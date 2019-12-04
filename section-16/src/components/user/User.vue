<template>
    <div>
        <h1>The User Page</h1>
        <hr/>
        <button @click="navigateToHome">Go To Home</button>
        <hr/>
        <router-view/>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                id: this.$route.params.id
            }
        },
        methods:{
            navigateToHome(){
                this.$router.push({name: 'home'});
            }
        }
    }
</script>