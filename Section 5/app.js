const data = {
    title: 'The VueJS Instance',
    showParagraph: false
};


const vm1 = new Vue({
    data: data,
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            console.debug(this.$refs.myButton);
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert(`Title changed, new value: ${value}`);
        }
    }
});

vm1.$mount('#app1');

console.debug(vm1.$data === data);

//vm1.$refs.heading.innerText = 'Smthing else';

setTimeout(function(){
    vm1.title = 'title change by timer'
}, 3000);


const vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'title app 2'
    },
    methods: {
        onChange: () => {
            vm1.title = 'changed!';
        }
    }
});

const vm3 = new Vue({
    el: '.hello',
   template: `<h1>Hello!</h1>`
});

/*
v3.$mount();
domcument.getElementById('app3').appendChild(vm3.$el);
*/
