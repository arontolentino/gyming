import Vue from 'vue';
import Tabs from './views/Tabs';
import Goals from './views/Goals';
import LogsIndex from './views/LogsIndex';
import Logs from './views/Logs';
import Progress from './views/Progress';

import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/tabs' },

    {
      path: '/tabs',
      name: 'tabs',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/views/Tabs.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          components: {
            index: () =>
              import(/* webpackChunkName: "tab1" */ '@/views/LogsIndex.vue')
          }
        },
        {
          path: '/index/logs',
          name: 'logs',
          components: {
            index: () =>
              import(/* webpackChunkName: "tab1" */ '@/views/Logs.vue')
          }
        },
        {
          path: '/tab2',
          name: 'tab2',
          components: {}
        }
      ]
    }
  ]
});
