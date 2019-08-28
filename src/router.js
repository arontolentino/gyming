import Vue from 'vue';
import Tabs from './views/Tabs';
import Home from './views/Home';
import History from './views/History';
import Progress from './views/Progress';
import Calendar from './views/Calendar';

import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tabs',
      redirect: 'home',
      component: Tabs,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'history',
          name: 'history',
          component: History
        },
        {
          path: 'progress',
          name: 'progress',
          component: Progress
        },
        {
          path: 'calendar',
          name: 'calendar',
          component: Calendar
        }
      ]
    }
  ]
});
