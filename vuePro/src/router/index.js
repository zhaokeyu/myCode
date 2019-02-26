import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import test from '@/components/test'
/*###options*/
import optionsView from '@/components/options/optionsView'
import optionsHome from '@/components/options/optionsHome'
import propsFu from '@/components/options/propsFu'
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
      path: '/optionsView',
      name: 'optionsView',
      component: optionsView,
      children: [
        {
          path: 'optionsHome',
          name: 'optionsHome',
          component: optionsHome
        },
        {
          path: 'propsFu',
          name: 'propsFu',
          component: propsFu
        },
      ],
      redirect: '/optionsView/optionsHome'
    },
    {
      path: '/mintUiView',
      name: 'mintUiView',
      component: mintUiView,
      children: [
        {
          path: 'mintUiHome',
          name: 'mintUiHome',
          component: mintUiHome,
          beforeEnter: (to, from, next) => {
            // console.log('mintUiHome组件_路由独享守卫触发');
            next();
          }
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
      redirect: '/mintUiView/mintUiHome',
      beforeEnter: (to, from, next) => {
        // console.log('mintUiView组件-路由独享守卫触发');
        next();
      }
    }
  ]
});

//###全局前置守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
