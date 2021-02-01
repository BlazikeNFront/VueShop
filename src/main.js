import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router/router.js'

import BackDrop from './components/common/BackDrop.vue';
import Loader from './components/common/loader.vue';





const app = createApp(App)

app.use(store);
app.use(router);
app.component('back-drop',BackDrop)
app.component('loader',Loader)

app.mount('#app');


