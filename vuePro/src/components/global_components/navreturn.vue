<template>
  <div>
    <!--该组件使用了mint-ui的mt-header和mt-button组件-->
    <div>
      <mt-header :title="title" fixed>
        <mt-button icon="back" slot="left" @click="navreturn()" v-show="returnBtnIsShow">返回</mt-button>
      </mt-header>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navreturn",
    props: ['title'],
    data() {
      return {
        returnBtnIsShow: true
      }
    },
    methods: {
      navreturn() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style scoped>

</style>
