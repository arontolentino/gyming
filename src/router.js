import Vue from 'vue';

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
          path: '/track',
          name: 'track',
          components: {
            track: () =>
              import(/* webpackChunkName: "tab1" */ '@/views/Track/Track.vue')
          }
        },
        {
          path: '/calendar',
          name: 'calendar',
          components: {
            calendar: () =>
              import(
                /* webpackChunkName: "tab1" */ '@/views/Calendar/Calendar.vue'
              )
          }
        },
        {
          path: '/history',
          name: 'history',
          components: {
            history: () =>
              import(
                /* webpackChunkName: "tab1" */ '@/views/History/History.vue'
              )
          }
        }
      ]
    }
  ]
});
