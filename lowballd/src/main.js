import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import router from './router'
import { TroisJSVuePlugin } from 'troisjs';

createApp(App).use(router).use(TroisJSVuePlugin).mount('#app')
