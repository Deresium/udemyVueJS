<template>
    <div>
        <h3>New quote</h3>
        <button @click="counter ++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.debug('Destroyed!');
        },
        deactivated() {
            console.debug('desactivated');
        },
        activated() {
            console.debug('activated');
        }
    }
</script>

<style scoped>

</style>