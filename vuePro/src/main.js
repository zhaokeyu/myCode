import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// ----- 我的代码 开始 ---------------------------------------------------------------
/*###vuex*/
import vuex from 'vuex'
import vuexTest from '@/store/vuex_test'

Vue.use(vuex);
const store = new vuex.Store(vuexTest);

/*###axios*/
import axios from 'axios';

Vue.prototype.axios = axios;

/*###mint-ui*/
import 'mint-ui/lib/style.min.css'
/*一次性引用mint-ui的全部组件*/
// import Mint from 'mint-ui';
// Vue.use(Mint);
import {Loadmore} from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);
import {Spinner} from 'mint-ui';

Vue.component(Spinner.name, Spinner);
import {Cell} from 'mint-ui';

Vue.component(Cell.name, Cell);
import {IndexList, IndexSection} from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
import {Button} from 'mint-ui';

Vue.component(Button.name, Button);
import {Header} from 'mint-ui';

Vue.component(Header.name, Header);

/*###全局自定义指令*/
// v-focus
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
});
// v-move：针对移动端做一个手指按下可拖动的元素，该元素需要position: absolute或者fixed
Vue.directive('move', {
  inserted: function (el) {
    el.addEventListener('touchstart', function (event) {
      // console.log(el.offsetParent);
      // console.log(el.offsetLeft);
      var touch = event.touches[0];
      var disX = touch.clientX - el.offsetLeft;
      console.log(touch.clientX);
      console.log(el.offsetLeft);
      var disY = touch.clientY - el.offsetTop;
      var elPosition = {};

      function move(event) {
        var touchs = event.touches[0];
        var elLeft = touchs.clientX - disX;
        var elTop = touchs.clientY - disY;

        elPosition = {
          x: elLeft,
          y: elTop
        };

        el.style.left = elLeft + 'px';
        el.style.top = elTop + 'px';
        event.preventDefault();
      }

      document.addEventListener('touchmove', move, {
        passive: false
      });
      document.addEventListener('touchend', function end(event) {

        if (elPosition.x < document.documentElement.clientWidth / 2) {
          el.style.left = 0;
        } else {
          el.style.left = document.documentElement.clientWidth - el.offsetWidth - 21 + 'px';
        }
        document.removeEventListener('touchmove', move, false);
        document.removeEventListener('touchend', end, false);
      });
    });
  }
});

/*###全局组件*/
import navreturn from '@/components/global_components/navreturn'

Vue.component('my-navreturn', navreturn);


// ----- 我的代码 结束 ---------------------------------------------------------------
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
