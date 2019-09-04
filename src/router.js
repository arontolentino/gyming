import Vue from 'vue';

import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(
          /* webpackChunkName: "home" */ '@/views/Authentication/Login.vue'
        )
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(
          /* webpackChunkName: "home" */ '@/views/Authentication/Register.vue'
        )
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/views/Tabs.vue'),
      children: [
        {
          path: '/entries',
          name: 'entries',
          components: {
            entries: () =>
              import(/* webpackChunkName: "tab1" */ '@/views/Track/Entries.vue')
          }
        },
        {
          path: '/entries/add',
          name: 'add-entry',
          components: {
            entries: () =>
              import(
                /* webpackChunkName: "tab1" */ '@/views/Track/AddEntry.vue'
              )
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
