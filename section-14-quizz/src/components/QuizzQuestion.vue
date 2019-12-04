<template>
    <div id="quizzQuestion">
        <h2>{{ question.wording }}</h2>
        <div class="responsesDiv">
            <button v-for="(response, index) in question.responses" :key="response.number" @click="responseClicked(index)">
                {{ response.number }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['question'],
        methods: {
            responseClicked(index){
                const response = this.question.responses[index];
                if(response.rightAnswer){
                    this.$emit('rightAnswerGiven');
                }else{
                    alert('NOPE');
                }
            }
        }
    }
</script>

<style scoped>
    #quizzQuestion{
        width: 30%;
    }
    .responsesDiv{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    button{
        width: 40%;
        margin-bottom: 1vh;
        background-color: lightslategrey;
        border: none;
        padding: 1vh 1vw 1vh 1vw;
        border-radius: 1%;
        color: white;
        font-size: large;
    }

    button:hover{
        cursor: pointer;
        background-color: slategrey;
    }
    h2{
        text-align: center;
    }
</style>