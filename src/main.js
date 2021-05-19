import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue3-google-oauth2'

const gAuthOptions = { clientId: '542881808938-lrudio7ssk4pdlvs9bobf68um3u0t80p.apps.googleusercontent.com', 
                        scope: 'email', 
                        prompt: 'consent', 
                        fetch_basic_profile: false }
createApp(App).use(GAuth, gAuthOptions).use(store).use(router).mount('#app')
