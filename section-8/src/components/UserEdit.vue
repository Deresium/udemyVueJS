<template>
    <div class="component userEdit">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main'
    export default {
        props:['userAge'],
        methods: {
            editAge(){
                this.userAge = 24;
                //this.$emit('ageWasEdited', this.userAge);
                //eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    .userEdit {
        background-color: lightgreen;
    }
</style>
