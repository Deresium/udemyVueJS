<template>
    <div>
        <h1> filters & mixins</h1>
        //text pass to upperCase and next the result pass to lowerCase (chain)
        <p>{{ text | toUppercase | toLowercase}}</p>
        <hr/>
        <button @click="fruits.push('berries')">Add new item</button>
        <input v-model="filterText"/>
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
        <hr/>
        <app-list></app-list>
    </div>
</template>

<script>
    import List from "./components/List";
    import {fruitMixin} from "./fruitMixin";

    export default {
        data() {
            return{
                text: 'Hello there!',
            }
        },
        components: {
            'app-list': List
        },
        filters: {
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
