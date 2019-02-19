import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import test from '@/components/test'
import example from '@/components/example'
import directive from '@/components/directive'
import mintUiView from '@/components/mint-ui/mintUiView'
import mintUiHome from '@/components/mint-ui/mintUiHome'
import toast from '@/components/mint-ui/js_component/toast'
import loadmore from '@/components/mint-ui/js_component/loadmore'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      beforeEnter: (to, from, next) => {
        console.log('路由独享守卫函数触发');
        next();
      }
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/directive',
      name: 'directive',
      component: directive
    },
    {
      path: '/mintUiView',
      name: 'mintUiView',
      component: mintUiView,
      children: [
        {
          path: 'mintUiHome',
          name: 'mintUiHome',
          component: mintUiHome
        },
        {
          path: 'toast',
          name: 'toast',
          component: toast
        },
        {
          path: 'loadmore',
          name: 'loadmore',
          component: loadmore
        }
      ],
      redirect: '/mintUiView/mintUiHome'
    }
  ]
});

//###全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫触发');
  next();
});

export default router;
