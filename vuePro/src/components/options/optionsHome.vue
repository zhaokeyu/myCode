<template>
  <div>
    <div>
      <my-navreturn :title="title"></my-navreturn>
    </div>
    <div>
      <router-link :to="{name: 'propsFu'}">props</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "optionsHome",
    data() {
      return {
        title: 'options-索引'
      }
    }
  }
</script>

<style scoped>

</style>
