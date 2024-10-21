import { reactive } from 'vue';

const store = reactive({
    show: false,
    counter: 1,
    name: "eeee",

    showhide() {     
        this.show = !this.show; // Use this.show instead of show     
    },
    increment() {     
        this.counter++;        
    },
    decrement() {   
        if (this.counter > 1) {
            this.counter--;
        }        
    },
});

export default store;
