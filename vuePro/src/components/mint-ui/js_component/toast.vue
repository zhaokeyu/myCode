<template>
  <div>
    <div>
      <my-navreturn :title="title"></my-navreturn>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: "toast",
    data() {
      return {
        title: 'toast'
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      }
    }
  }
</script>

<style scoped>

</style>
