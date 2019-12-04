<template>
    <div>
        <h2>That's correct!</h2>
        <button @click="nextQuestionClicked">Next Question</button>
    </div>
</template>

<script>
    export default {
        methods: {
            nextQuestionClicked(){
                this.$emit('nextQuestionClicked');
            }
        }
    }
</script>

<style scoped>
    div{
        background-color: lightgreen;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 2%;
        padding-bottom: 2vh;
    }

    h2{
        color: green;
        width: 80%;
        border-bottom: solid 1px green;
        text-align: center;
    }

    button{
        padding: 1vh 2vw 1vh 2vw;
        border: none;
        border-radius: 1%;
        background-color: ghostwhite;
        color: dimgrey;
        cursor: pointer;
    }

    button:hover{
        background-color: #afb0af;
    }

</style>