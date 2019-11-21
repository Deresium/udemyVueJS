<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server === null">Select a server</p>
        <div v-else>
            {{server.status}}
            <button @click="resetStatus">Back to Normal status</button>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../../main'
    export default {
        data: ()=>{
            return {
                server: null
            }
        },
        created(){
            eventBus.$on('serverSelected', server=>{
                this.server = server;
            });
        },
        methods: {
            resetStatus() {
                this.server.status = 'Normal';
            }
        }
    }
</script>

<style scoped>
    /*div{
        border: 1px solid red;
    }*/
</style>