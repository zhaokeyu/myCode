<template>
  <div>
    <div>
      <my-navreturn :title="title"></my-navreturn>
    </div>
    <div>
      <router-link :to="{name: 'propsFu'}">toast</router-link>
    </div>
    <div>
      <router-link :to="{name: 'loadmore'}">loadmore</router-link>
    </div>
    <div>
      <router-link :to="{name: 'spinner'}">spinner</router-link>
    </div>
    <div>
      <router-link :to="{name: 'indexlist'}">indexlist</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mintUiHome",
    data() {
      return {
        title: 'mint-ui'
      }
    },
    beforeRouteEnter (to, from, next) {
      // console.log('mintUiHome组件_组件内前置守卫触发');
      next();
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    }
  }
</script>

<style scoped>

</style>
