<template>
  <div>
    <h2>loadmore</h2>
    <div>
      <!--
        该组件没配置路由，可以把代码拷到test.vue组件进行测试

        参数说明：
        @top-status-change表示当顶部下拉状态改变时触发回调（注：不能加括号）下拉有pull、drop、loading三种状态。回调函数参数就是这三种状态

        注意：mt-loadmore中调用的回调函数都不能加括号，这跟vue事件调用回调不同
        待解决问题：当list数据多的时候，ul撑满了屏幕，则底部上拉加载触发不了是为什么？？

        该文件想表达内容：
        像下拉不同状态显示不同提示的设置，可通过文档给的案例来。以下三个配合使用来做这个功能
        @top-status-change="handleTopChange"
        和
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'pull' }">↓</span>
          <span v-show="topStatus === 'drop'" :class="{ 'rotate': topStatus === 'drop' }">↑</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
        和
        handleTopChange(status) {
          console.log(status);
          this.topStatus = status;
        },

      -->
      <mt-loadmore
        ref="loadmore"
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        @top-status-change="handleTopChange"
        :auto-fill="autoFill"
      >
        <ul class="load_more">
          <li v-for="item in list">{{ item }}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'pull' }">↓</span>
          <span v-show="topStatus === 'drop'" :class="{ 'rotate': topStatus === 'drop' }">↑</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loadmore",
    data() {
      return {
        topStatus: '',  //下拉状态
        allLoaded: false, //底部是否还有更多数据
        autoFill: false,  //是否开启底部自动检测
        list: ['1','2','3','3','4','5','1','3','4','5','1','1','2','3','4','5']
      }
    },
    methods: {
      handleTopChange(status) {
        console.log(status);
        this.topStatus = status;
      },
      loadTop() {
        console.log('顶部-下拉加载更多触发');
        //模拟请求回来重置状态
        setTimeout( () => {
          this.$refs.loadmore.onTopLoaded();  //重置下拉状态
        },1000)
      },
      loadBottom() {
        console.log('底部-上划加载更多触发');
        setTimeout( () => {
          this.$refs.loadmore.onBottomLoaded(); //重置上拉状态
          // 如果没有更多数据则把下行代码放开就ok
          // this.allLoaded = true;
        },1000)
      }
    }
  }
</script>

<style scoped>
  .load_more {
    border: 1px solid pink;
  }
</style>
