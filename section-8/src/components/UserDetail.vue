<template>
    <div class="component userDetail">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
    import {eventBus} from '../main'
    export default {
        props: {
            //name: [String, Array]   example multilple types
            name: {
                type: String,
                //required: true
                default: 'Dimitri'

                //example object type
                // type: Object
                // default: function() {
                //  return {
                //      name: 'Dimitri'
                //  }
                // }
            },
            resetFn: Function,
            userAge: Number
        },
        methods:{
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                this.name = 'Dimitri';
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', age => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    .userDetail {
        background-color: lightcoral;
    }
</style>
