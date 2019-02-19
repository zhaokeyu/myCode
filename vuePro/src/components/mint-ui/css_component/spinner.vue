<template>
  <div>
    <h5>加载动画</h5>
    <div>
      <mt-spinner type="snake"></mt-spinner>
      <mt-spinner type="double-bounce" :size="30" color="pink"></mt-spinner>
      <mt-spinner type="triple-bounce" :size="35" color="blue"></mt-spinner>
      <mt-spinner type="fading-circle" :size="40" color="red"></mt-spinner>
    </div>
  </div>
</template>

<script>
  export default {
    name: "spinner"
  }
</script>

<style scoped>

</style>
