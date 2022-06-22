import { createApp } from 'vue'
import App from './App.vue'
// import './styles/element/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
