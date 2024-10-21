

import './bootstrap';
import { createApp } from 'vue';
import headerpage from './components/Header.vue';
import bodyes from './components/ExampleComponent.vue';


const app = createApp({});

app.component('headerpage', headerpage);

app.component('bodyes', bodyes);



app.mount('#app');
