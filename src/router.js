import Vue from 'vue';
import Tabs from './views/Tabs.vue';

import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tabs',
      component: Tabs,
      children: [
        // {
        //   path: 'learn',
        //   name: 'learn',
        //   component: Learn
        // }
      ]
    }
  ]
});
