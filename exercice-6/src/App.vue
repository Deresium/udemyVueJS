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
    import HeaderApp from './components/HeaderApp'
    import ServerList from './components/ServersList'
    import FooterApp from "./components/FooterApp";
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
