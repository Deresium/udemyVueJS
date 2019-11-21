<template>
    <li @click="selectServer">Server #{{ server.id }}</li>
</template>

<script>
    import {eventBus} from '../../main'
    export default {
        props:{
            server: Object
        },
        methods: {
            selectServer() {
                eventBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>

<style scoped>

</style>