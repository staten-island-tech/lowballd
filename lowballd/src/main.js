import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import router from './router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
createApp(App).use(router).mount('#app')
