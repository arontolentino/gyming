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
    {
      path: '/',
      name: 'tabs',
      redirect: 'logs',
      component: Tabs,
      children: [
        {
          path: 'goals',
          name: 'goals',
          component: Goals
        },
        {
          path: 'logs',
          name: 'logs',
          component: LogsIndex
        },
        {
          path: 'log',
          name: 'log',
          component: Logs
        },
        {
          path: 'progress',
          name: 'progress',
          component: Progress
        }
      ]
    }
  ]
});
