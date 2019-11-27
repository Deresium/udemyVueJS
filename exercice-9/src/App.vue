<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <fullname-input v-model="fullName"/>
                    <label>
                        Email
                        <input type="email" v-model="email"/>
                    </label>
                    <label>
                        Password
                        <input type="password" v-model="password"/>
                    </label>
                    <p>Storing data?</p>
                    <label>
                        Yes
                        <input type="radio"  value="store" v-model="storingData"/>
                    </label>
                    <label>
                        No
                        <input type="radio" value="notStore" v-model="storingData"/>
                    </label>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button @click.prevent="submittedForm">Submit</button>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storingData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullNameInput from "./components/FullNameInput";

    export default {
        data(){
            return{
                fullName: 'Dimitri Steinbusch',
                email: '',
                password: '',
                storingData: null,
                submitted: false
            }
        },
        components:{
            'fullname-input': FullNameInput
        },
        computed: {
            /*fullName(){
                return `${this.firstName} ${this.lastName}`
            }*/
        },
        methods:{
            submittedForm(){
                this.submitted = true;
            }
        }
    }
</script>

<style>
    label{
        width: 100%;
    }
</style>
