<template>
    <ul>
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    </ul>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .active{
        color: #76ff7e;
    }
</style>