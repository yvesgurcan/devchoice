import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Related from '@/pages/Related';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:podcast/:episode',
      component: Related,
    },
  ],
});
