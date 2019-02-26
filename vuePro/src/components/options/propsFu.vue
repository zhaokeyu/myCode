<template>
  <div>
    <!--该组件演示父组件向子组件传参-->
    <div>
      <my-navreturn :title="title"></my-navreturn>
    </div>
    <!--###正文开始-->
    <!--传对象-->
    <props-zi  v-bind:fuToZi="fuToZi"></props-zi>
    <!--传对象的属性-->
    <!--<props-zi v-bind="jianJi"></props-zi>-->
  </div>
</template>

<script>
  import propZi from './propsZi'
  export default {
    name: "propsFu",
    data() {
      return {
        title: 'props',
        fuToZi: {
          name: 'QQ',
          skill: '历任华尔兹'
        }
      }
    },
    components: {
      "props-zi": propZi
    },
    methods: {
      fooFu: (qiTaData) => {
        console.log('aa');
        console.log(qiTaData);
      }
    }
  }
</script>

<style scoped>

</style>
