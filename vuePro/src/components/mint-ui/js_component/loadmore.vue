<template>
  <div>
    <h2>loadmore</h2>
    <div>
      <!--
        常用配置说明：（文档都有）
        ref="loadmore"表示mt-loadmore组件，文档中就是使用“loadmore”字段代表该组件的
        :top-method表示顶部下拉时触发回调。注：不能加括号
        :bottom-method表示底部上拉时触发回调。注：不能加括号
        :bottom-all-loaded当底部数据全部获取完毕时，可以将绑定到组件 bottom-all-loaded 属性的变量赋值为 true，这样 bottom-method 就不会再次执行了
        @top-status-change表示当顶部下拉状态改变时触发回调（注：不能加括号）下拉有pull、drop、loading三种状态。回调函数参数就是这三种状态
        当loadmore组件初始化时会自动检测它的高度是否能撑满其容器，从而会自动调用bottom-method方法。而auto-fill等于false时不自动检测

        注意：
        mt-loadmore中调用的回调函数都不能加括号，这跟vue事件调用回调不同

        总结：
        像下拉不同状态显示不同提示的设置，可通过文档给的案例来。以下三个配合使用来做这个功能。详情参考loadmore_v01.vue
        也可在mt-loadmore组件上配置参数来，这里我们选择配置选项（推荐）
        参照文档配置更多参数，so easy
      -->
      <mt-loadmore
        ref="loadmore"
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :auto-fill="autoFill"
        :top-pull-text="topPullText"
        :top-drop-text="topDropText"
        :top-loading-text="topLoadingText"
      >
        <ul class="load_more">
          <li v-for="item in list">{{ item }}</li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loadmore",
    data() {
      return {
        allLoaded: false, //底部是否还有更多数据
        autoFill: false,  //是否开启底部自动检测
        list: ['1','2','3','3','4','5','1','3','4','5','1','1','2','3','4','5'],
        topPullText: '↓', //下拉状态为pull时显示内容
        topDropText: '↑', //下拉状态为drop时显示内容
        topLoadingText: 'loading…'  //下拉状态为loading时显示内容
      }
    },
    methods: {
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
