export const textAffichMixin = {
    data(){
        return{
            text: 'here is the text to reverse'
        }
    },
    computed: {
        computedReverseText(){
            return this.text.split('').reverse().join('');
        },
        computedCounterChar(){
            return `${this.text} (${this.text.length})`
        }
    }
};