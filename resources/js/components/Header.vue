<template>
    <div>
        <h1>Header</h1>        
        <button @click="decrementCounter">Decrement</button>
        <p>Counter: {{ counter }}</p>        
        <button @click="dtahidedataee('test')">test</button>

        <div v-for="(item, index) in dataList" :key="index">
            {{ item }}
        </div>

    </div>
</template>




<script>
    import { ref, watchEffect } from 'vue';
    import store from '../store';

export default {
    setup() {        
        const counter = ref(store.counter);

        const dataList = ref(store.dataList);

        
        const decrementCounter = () => {
            store.decrement();
            counter.value = store.counter;
        };

        const dtahidedataee = (a)=>{
            store.dtahide(a);            
        }



        watchEffect(()=>{
            counter.value = store.counter;
            dataList.value = store.dataList;
        })


        return {            
            counter,
            decrementCounter,
            dtahidedataee,
            dataList
        };
    },
};
</script>











