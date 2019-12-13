<template>
    <div>
        <app-header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    export default {
        name: 'app',
        components: {
            'app-header': Header
        }
    }
</script>

<style>

</style>