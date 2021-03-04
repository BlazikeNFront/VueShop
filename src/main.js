import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router/router.js'

//font-awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faMapMarkerAlt, faFax, faShoppingCart,faCartArrowDown,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone,faEnvelope,faMapMarkerAlt,faFax,faFacebook,faTwitter,faInstagram,faShoppingCart,faCartArrowDown,faArrowRight);


//global componenets
import BackDrop from './components/common/BackDrop.vue';
import Loader from './components/common/loader.vue';
import BaseCard from './components/common/BaseCard.vue';
import ErrorModal from './components/common/ErrorModal.vue';





const app = createApp(App)

app.use(store);
app.use(router);
app.component('back-drop', BackDrop);
app.component('loader', Loader);
app.component('base-card', BaseCard);
app.component('error-modal', ErrorModal);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');


