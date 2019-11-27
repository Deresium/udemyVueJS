<template>
    <div>
        <label>
            First Name
            <input type="text" :value="firstName" @input="nameChanged(true, $event)"/>
        </label>
        <label>
            Last Name
            <input type="text" :value="lastName" @input="nameChanged(false, $event)"/>
        </label>
    </div>
</template>

<script>
    export default {
        props:['value'],
        methods:{
            nameChanged(isFirst, event){
                let name = '';
                if(isFirst){
                    name = `${event.target.value} ${this.lastName}`;
                }
                else{
                    name = `${this.firstName} ${event.target.value}`;
                }
                this.value = name;
                this.$emit('input', this.value);
            }
        },
        computed:{
            firstName(){
                return this.value.split(' ')[0];
            },
            lastName(){
                return this.value.split(' ')[1];
            }
        }
    }
</script>

<style scoped>

</style>