import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

createApp(App).use(BootstrapIconsPlugin).use(store).use(router).mount('#app')
