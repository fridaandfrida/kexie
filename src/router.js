import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./pages/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('./pages/home.vue')
        },
        {
          path: '/question',
          component: () => import('./pages/question.vue')
        },
        {
          path: '/win',
          component: () => import('./pages/win.vue')
        },
        {
          path: '/user',
          component: () => import('./pages/user.vue')
        },
        {
          path: '/money',
          component: () => import('./pages/money.vue')
        }
      ]
    }
  ]
});