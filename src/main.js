// import './assets/main.css'
import './index.css'

import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia();
const app = createApp(App)

app.use(router);
app.use(pinia);

app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
        }
    })
)

app.mount('#app')
