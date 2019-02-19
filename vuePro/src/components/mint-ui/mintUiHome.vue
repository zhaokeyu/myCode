<template>
    <div>
      <div>
        <router-link :to="{name: 'toast'}">toast</router-link>
      </div>
      <div>
        <router-link :to="{name: 'loadmore'}">loadmore</router-link>
      </div>
      <div>
        <router-link :to="{name: 'spinner'}">spinner</router-link>
      </div>
      <div>
        <router-link :to="{name: 'indexlist'}">indexlist</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mintUiHome"
    }
</script>

<style scoped>

</style>
