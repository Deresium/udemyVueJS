<template>
    <div>
        <h3>Some User Details</h3>
        <p> User loaded ID: {{ $route.params.id }}</p>
        <router-link tag="button" :to="link">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                link:{
                    name:'userEdit',
                    params:{
                        id: this.$route.params.id
                    },
                    query:{
                        'locale': 'en', 'q': 100
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next){
            //as long as you don't call next, the component is not loaded. It's not loaded.
            next(vm=>{
                console.log(vm.link); // to access to component property. the component is created here.
            });
            //next(false) to not enter in the component
        }
    }
</script>