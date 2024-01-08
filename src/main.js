import '@mdi/font/css/materialdesignicons.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'         //    /lib/framework.mjs
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({components,directives,})
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')