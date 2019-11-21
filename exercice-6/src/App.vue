<template>
    <div class="container">
        <header-app></header-app>
        <hr>
        <servers-list></servers-list>
        <hr>
        <footer-app></footer-app>
    </div>
</template>

<script>
    import HeaderApp from './components/Shared/HeaderApp'
    import ServerList from './components/Server/ServersList'
    import FooterApp from "./components/Shared/FooterApp";
    export default {
        name: 'app',
        components: {
            'header-app': HeaderApp,
            'servers-list': ServerList,
            'footer-app': FooterApp
        }
    }
</script>

<style>

</style>
