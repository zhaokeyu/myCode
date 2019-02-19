<template>
  <div>
    <h1>{{title}}</h1>
    <div>
      <input
        v-model.number="message"
        placeholder="edit me"
        v-focus
      >
      <p>Message is: {{ message }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "directive",
    data() {
      return {
        title: '指令练习组件',
        message: '123'
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData:function() {
        this.axios({
          method: 'get',
          url: '/mock/heros',
          data: {}
        }).then(function (res) {
          console.log(res);
        }).catch(function (err) {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>
