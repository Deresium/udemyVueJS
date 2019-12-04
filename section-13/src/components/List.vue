<template>
    <div>
        <h1>filters & mixins</h1>
        <input v-model="filterText"/>
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from "../fruitMixin";

    export default {
        mixins: [fruitMixin],
        created() {
            console.debug('list created');
        }
    }
</script>

<style>

</style>