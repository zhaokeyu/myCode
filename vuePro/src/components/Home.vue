<template>
  <div class="hello">
    <my-navreturn :title="title"></my-navreturn>
    <div>
      <router-link :to="{name:'test'}">测试</router-link>
    </div>
    <div>
      <router-link :to="{name:'optionsView'}">选项</router-link>
    </div>
    <div>
      <router-link :to="{name:'mintUiView'}">mint-ui</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Home组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
