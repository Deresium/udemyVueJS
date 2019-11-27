<template>
    <div>
        <quote-counter :counter="quotes.length" :maxQuotes="maxQuotes"/>
        <quote-add :counter="quotes.length" :maxQuotes="maxQuotes" @newQuoteAdded="addQuoteToList"/>
        <quote-list :quotesList="quotes"/>
        <div class="info">
            Info: Click on a Quote to delete it!
        </div>
    </div>
</template>

<script>
    import quoteCounter from "./components/quoteCounter";
    import quoteAdd from "./components/quoteAdd";
    import quoteList from "./components/quoteList";
    export default {
        data: () => {
            return {
                maxQuotes: 100,
                quotes: ['Just a Quote to start with something']
            }
        },
        components:{
            'quote-counter': quoteCounter,
            'quote-add': quoteAdd,
            'quote-list': quoteList
        },
        methods:{
            addQuoteToList($event){
                this.quotes.push($event)
            }
        }
    }
</script>

<style>
    div.info{
        width: 100%;
        text-align: center;
        background-color: powderblue;
        color: royalblue;
        padding-top: 2vh;
        padding-bottom: 2vh;
        border-radius: 1%;
    }
</style>
