<template>
    <div>
        <h1>Animations</h1>
        <hr/>
        <select v-model="alertAnimation">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </select>
        <hr/>
        <button @click="show=!show">Show alert</button>
        <br/>
        <transition :name="alertAnimation">
            <div v-if="show">This is some info</div>
        </transition>
        <transition name="slide" type="animation">
            <div v-show="show" class="infoClass">This is some info</div>
        </transition>
        <transition name="fade" appear>
            <div v-if="show">This is some info</div>
        </transition>
        <transition
                appear
                enter-class="fade-enter"
                enter-active-class="fade-enter-active"
                leave-class="fade-leave"
                leave-active-class="fade-leave-active">
            <div v-if="show">This is some info</div>
        </transition>
        <hr/>
        <transition :name="alertAnimation" mode="out-in"> <!-- ou in-out -->
            <div class="infoClass info" v-if="show" key="info">This is an info</div>
            <div class="infoClass alert" v-if="!show" key="warning">This is an alert</div>
        </transition>
        <hr/>
        <button @click="load = !load">Load / Remove element</button>
        <br/>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"

            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
            :css="false"
        > <!--:css="false" says don't search after css classes it's full js -->
            <div class="info infoClass" v-if="load">Not particular div</div>
        </transition>
        <hr/>
        <button @click="toggleComponent">Toggle component</button>
        <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
        </transition>
        <hr/>
        <button @click="addItem">Add item</button>
        <ul>
            <transition-group name="slide">
                <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">{{ number }}</li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
    import SuccessAlert from "./components/SuccessAlert";
    import DangerAlert from "./components/DangerAlert";
    export default {
        data(){
            return{
                show: false,
                alertAnimation: 'fade',
                load: false,
                elementWidth: 100,
                selectedComponent: 'success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        components:{
            'success-alert': SuccessAlert,
            'danger-alert': DangerAlert
        },
        methods:{
            beforeEnter(el){
                console.debug(`${el.id} beforeEnter`);
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done){
                console.debug(`${el.id} enter`);
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = `${this.elementWidth + round * 10}px`;
                    round ++;
                    if(round > 20){
                        clearInterval(interval);
                        done(); //tell Vue.js when it's done (with css we have transition and animationto say it, ...).
                    }
                }, 20);
            },
            afterEnter(el){
                console.debug(`${el.id} afterEnter`);
            },
            enterCancelled(el){
                console.debug(`${el.id} enterCancelled`);
            },
            beforeLeave(el){
                console.debug(`${el.id} beforeLeave`);
                this.elementWidth = 300;
                el.style.width = `${this.elementWidth}px`;
            },
            leave(el, done){
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = `${this.elementWidth - round * 10}px`;
                    round ++;
                    if(round > 20){
                        clearInterval(interval);
                        done(); //tell Vue.js when it's done (with css we have transition and animationto say it, ...).
                    }
                }, 20);
            },
            afterLeave(el) {
                console.debug(`${el.id} afterLeave`);
            },
            leaveCancelled(el){
                console.debug(`${el.id} leaveCancelled`);
            },
            toggleComponent(){
                this.selectedComponent === 'success-alert'? this.selectedComponent =  'danger-alert': this.selectedComponent = 'success-alert';
            },
            addItem(){
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index){
                this.numbers.splice(index, 1);
            }
        }
    }
</script>

<style>
    .infoClass{
        color: white;
        width: 100%;
        padding-top: 4vh;
        padding-bottom: 4vh;
        padding-left: 10vw;
    }
    .info{
        background-color: royalblue;
    }
    .alert{
        background-color: palevioletred;
    }

    .fade-enter{
        opacity: 0;
    }

    .fade-enter-active{
        transition: opacity 1s;
    }

    .fade-leave{

    }

    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter{
        opacity: 0;
    }

    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }

    .slide-leave{

    }

    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move{
        /* all element that need to change of place if one disapear */
        transition: transform 1s;
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }
</style>
