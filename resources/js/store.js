import { reactive } from 'vue';

const store = reactive({
    show: false,
    counter: 1,
    name: "your name",
    dataList: ['Item 1', 'Item 2', 'Item 3'],

    showhide() {     
        this.show = !this.show;
    },

    increment() {     
        this.counter++; 
        this.dataList = ['Item 1', 'Item 2', 'Item 3'];
    },

    dtahide(a){
    	if(this.name == a){
    		this.name = "your name";	
    	}else{
    		this.name = a;
    	}    	
    },

    decrement() {   
        if (this.counter > 1) {
            this.counter--;
            this.dataList = [];
        }        
    },
});

export default store;
