<template>
    <button @click="incrementCounter">Increment</button>
    <p>{{ counter }}</p>
    <span>{{ name }}</span>
    <br />
</template>

<script>
import { ref, watchEffect } from 'vue';
import store from '../store';

export default {
    setup() {
        const counter = ref(store.counter);
        const name = ref(store.name);

        const incrementCounter = () => {
            store.increment();             
        };

        watchEffect(() => {
            counter.value = store.counter;
            name.value = store.name;
        });

        return {           
            counter,
            name,
            incrementCounter,
        };
    },
};
</script>
