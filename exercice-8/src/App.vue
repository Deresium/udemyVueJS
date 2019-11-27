<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="componentLoad='appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="componentLoad='appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="componentLoad='appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <app-blue>
                    <p>Text pass in the default slot</p>
                </app-blue>
                <app-green>
                    <p slot="title"> text for the title slot</p>
                    <p slot="text"> this is text</p>
                    <p>this is for the default slot</p>
                </app-green>
                <app-red>
                    <p> test default text</p>
                </app-red>
                <hr/>
                <component :is="componentLoad">
                    <p>Default slot</p>
                    <p slot="title">Title slot</p>
                    <p slot="text">text slot</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: () => {
            return {
                componentLoad: 'appGreen'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
