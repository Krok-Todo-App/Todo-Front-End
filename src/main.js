import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css/normalize.css"
import "./assets/scss/_fonts.scss"
import axios from "axios";


if (store.state.jwt) {
    axios.defaults.headers["Authorization"] =
        "Bearer " + store.state.jwt
}


createApp(App).use(store).use(router).mount('#app')
