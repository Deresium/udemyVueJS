<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <button @click="selectedComponent = 'app-quote'">Quote</button>
                    <button @click="selectedComponent = 'app-author'">Author</button>
                    <button @click="selectedComponent = 'app-new'">New</button>
                    <hr/>
                    <p>{{ selectedComponent}}</p>
                    <keep-alive>
                        <component :is="selectedComponent">
                            <p>Default content</p>
                        </component>
                    </keep-alive>
                    <!--<app-quote>
                        <h2 slot="title">{{quoteTite}}</h2>
                        <p>A wonderful quote</p>
                    </app-quote>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote'
    import appAuthor from "./components/appAuthor";
    import appNew from "./components/appNew";
    export default {
        data: () => {
            return {
                quoteTite: 'The Quote',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': appAuthor,
            'app-new': appNew
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h2{
        color: red;
    }
</style>
