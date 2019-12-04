<template>
    <div id="mainApp">
        <h1>The Super Quizz</h1>
        <transition name="closeOnHimself" mode="out-in" appear>
            <quizz-question
                    :question="questionList[showingQuestion]"
                    @rightAnswerGiven="rightAnswerGiven"
                    v-if="!rightAnswer"
                    key="question"
            />
            <quizz-right-answer
                    v-else
                    @nextQuestionClicked="nextQuestion"
                    key="rightAnswer"
            />
        </transition>
    </div>
</template>

<script>
    import {questionList} from "./QuestionList";
    import QuizzQuestion from "./components/QuizzQuestion";
    import QuizzRightAnswer from "./components/QuizzRightAnswer";

    export default {
        data: () => ({
            questionList,
            showingQuestion: 0,
            rightAnswer: false
        }),
        components:{
            'quizz-question': QuizzQuestion,
            'quizz-right-answer': QuizzRightAnswer
        },
        methods:{
            rightAnswerGiven(){
                this.rightAnswer = true;
            },
            nextQuestion(){
                if(this.questionList.length - 1 === this.showingQuestion ){
                    this.showingQuestion = 0;
                }else{
                    this.showingQuestion ++;
                }
                this.rightAnswer = false;
            }
        }
    }
</script>

<style>
    #mainApp{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        color: dimgrey;
        border-bottom: solid 1px darkgrey;
        width: 50%;
        text-align: center;
        padding-bottom: 2vh;
    }

    .closeOnHimself-enter{
    }
    .closeOnHimself-enter-active{
        animation: openOnHimself 0.2s forwards;
    }
    .closeOnHimself-leave{
    }
    .closeOnHimself-leave-active{
        animation: closeOnHimself 0.2s forwards;
    }

    @keyframes closeOnHimself {
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(90deg);
        }
    }

    @keyframes openOnHimself {
        from{
            transform: rotateY(90deg);
        }
        to{
            transform: rotateY(0deg);
        }
    }
</style>
