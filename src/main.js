 import '@/assets/main.css'

 import VueLazyload from 'vue-lazyload';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.use(VueLazyload, {
  preLoad: 1.3,
  //error: 'https://picsum.photos/536/354',
  //loading: 'https://picsum.photos/536/354',
  attempt: 1
})
app.mount('#app')
