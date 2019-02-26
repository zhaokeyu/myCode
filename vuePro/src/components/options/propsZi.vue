<template>
  <div>
    <div>
      <span>{{fuToZi}}</span>
      <button @click="fooZi">触发父组件methods方法</button>
      <button @click="changeName">改变数据</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "propsZi",
    data() {
      return {

      }
    },
    props: {
      fuToZi: {
        type: Object,
        default: {}
      }
    },
    mounted() {

    },
    methods: {
      fooZi() {
        if(this.myy) {
          // this.$emit('myEvent','其他数据')
          this.myy('其他数据据')
        }
      },
      changeName() {
        this.fuToZi.name = 'hh'
      }
    },
    watch: {
      'fuToZi': {
        handler: function (val, oldVal) {
          console.log('watch观察触发');
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style scoped>

</style>
