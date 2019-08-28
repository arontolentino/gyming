import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Ionic from '@ionic/vue';

// Ionic core styles and theming
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

// Use ionic/vue plugin
Vue.use(Ionic);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
