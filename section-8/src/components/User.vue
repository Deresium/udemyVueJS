<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Age: {{ age }}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :name="name"
                        :resetFn="resetName"
                        :userAge="age"
                        @nameWasReset="name = $event"
                        ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                        :userAge="age"
                        @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: ()=>{
            return{
                name: 'Dimitri',
                age: 20
            }
        },
        methods:{
            changeName() {
                this.name = 'Steinbusch';
            },
            resetName() {
                this.name = 'Dimitri';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
