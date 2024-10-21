<template>
    <button @click="incrementCounter">Increment</button>
    <button @click="showhide">Show/Hide</button>
    <br/>
    <div v-if="show">{{ show }}</div>    
</template>






<script>
import { computed } from 'vue';
import store from '../store';

export default {
    setup() {        
        const incrementCounter = () => store.increment();
        const showhide = () => store.showhide();

        const show = computed(() => store.show);
        
        return {
            showhide,
            show,
            incrementCounter
        };
    },
};
</script>
