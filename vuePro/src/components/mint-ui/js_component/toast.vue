<template>
  <div>
    <h4>toast</h4>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: "toast",
    data() {
      return {

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
