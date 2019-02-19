<template>
  <div>
    <h3>{{msg}}</h3>
    <div>全局状态name值为：{{name}}</div>
    <div>全局状态age值为：{{foo_com}}</div>
    <button @click="foo">点击改变全局状态name</button>
    <button v-on:click="foo_ajax">发送ajax请求</button>
    <div @click="test()" style="width: 30px; height: 30px; background-color: red;">啊</div>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        msg: '测试组件',
        name: this.$store.getters.getName,
        age: this.$store.getters.getAge
      }
    },
    methods: {
      foo() {
        this.$store.dispatch('chuFaFoo', {num: 1});
        console.log(this.$store.getters.getAge);
      },
      test() {
        console.log('haah');
      },
      foo_ajax() {
        /*this.axios.get('http://localhost:3000/mock/heros')
          .then( res => {
            console.log(res);
          })
          .catch( err => {
            console.log(err);
          })*/

        this.axios.get('/mock/heros')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    },
    computed: {
      foo_com() {
        return this.$store.getters.getAge;
      }
    }
  }
</script>

<style scoped>

</style>
