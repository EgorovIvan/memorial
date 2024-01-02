import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.scss'
import { createPinia } from 'pinia'
import './firebaseInit'
import { createI18n } from "vue-i18n";
import en from "@/locales/en";
import ru from "@/locales/ru";
import VueTheMask from 'vue-the-mask'

const pinia = createPinia()
const app = createApp(App)

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: false,
  messages: {
    en,
    ru
  },
});

app.use(i18n);
app.use(router)
app.use(pinia)
app.use(VueTheMask)

app.mount('#app')
