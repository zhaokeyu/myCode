import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import test from '@/components/test'
/*###mint-ui*/
import mintUiView from '@/components/mint-ui/mintUiView'
import mintUiHome from '@/components/mint-ui/mintUiHome'
import toast from '@/components/mint-ui/js_component/toast'
import loadmore from '@/components/mint-ui/js_component/loadmore'
import indexlist from '@/components/mint-ui/js_component/indexlist'
import spinner from '@/components/mint-ui/css_component/spinner'


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
      component: test
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
        },
        {
          path: 'spinner',
          name: 'spinner',
          component: spinner
        },
        {
          path: 'indexlist',
          name: 'indexlist',
          component: indexlist
        },
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
