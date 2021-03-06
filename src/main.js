import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Ionic from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import vuetify from './plugins/vuetify';

import '@/firebase/index.js';

Vue.config.productionTip = false;

Vue.use(Ionic);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
