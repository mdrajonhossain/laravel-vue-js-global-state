

<template>
    <div>
        <h1>Header</h1>        
        <button @click="decrementCounter">Decrement</button>
        <p>Counter: {{ counter }}</p>
        <p>{{ nameyour }}</p>

    </div>
</template>




<script>
import { computed } from 'vue';
import store from '../store';

export default {

    
    setup() {

    
        
        const nameyour = computed(() => store.name);

        const counter = computed(() => store.counter);

        
        const decrementCounter = () => store.decrement();

        return {
        	nameyour,
            counter,            
            decrementCounter,
        };
    },
};
</script>
 