<template>
    <div>
        <label>
        Quote
            <textarea v-model="quoteText"/>
        </label>
        <button @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
    export default {
        data: () => ({
            quoteText: null
        }),
        props:['counter', 'maxQuotes'],
        methods:{
            addQuote(){
                if(this.quoteText == null){
                    alert('There is no quote');
                }
                else if(this.counter >= this.maxQuotes) {
                    alert('You have to delete one quote before to add');
                }
                else{
                    this.$emit('newQuoteAdded', this.quoteText);
                    this.quoteText = null;
                }
            }
        }
    }
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4vh;
    }
    label{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    button{
        background-color: royalblue;
        color: white;
        border: solid 1px darkgrey;
        padding: 1vh 1vw 1vh 1vw;
        border-radius: 5%;
    }

    button:hover{
        background-color: darkblue;
    }
</style>