<template>
   <div>
       <h1>Quotes Added</h1>
       <div class="progressBar">
           <div class="blueProgress" :style="progressColor">
               {{ counter }} / {{ maxQuotes }}
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        props: ['counter', 'maxQuotes'],
        computed:{
            progressColor(){
                return{
                    'width': `${(100/this.maxQuotes)*this.counter}%`
                }
            }
        }
    }
</script>

<style scoped>
    .progressBar{
        width: 100%;
        height: 4vh;
        border: solid 1px darkgrey;

    }

    .blueProgress{
        background-color: skyblue;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>