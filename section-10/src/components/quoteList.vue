<template>
    <div>
        <div class="quoteList">
            <div class="quoteDiv" v-for="(quote, index)  in quotesList" :key="index" @click="deleteQuote(index)">
                {{quote}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quotesList'],
        methods:{
            deleteQuote(index){
                this.quotesList.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .quoteList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 5vh;
        align-items: center;
    }
    .quoteDiv{
        border: solid 1px darkgrey;
        box-sizing: border-box;
        padding: 1vh 1vw 1vh 1vw;
        width: 24%;
        margin-bottom: 2vh;
        border-radius: 2%;
        word-break: break-word;
    }

    .quoteDiv:hover{
        cursor: pointer;
        background-color: orange;
    }
</style>