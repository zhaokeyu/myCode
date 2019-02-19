<template>
  <div>
    <h2>index list（索引列表组件）</h2>
    <div>
      <!--
        看文档
      -->
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron"></mt-cell>
          <mt-cell title="Alden"></mt-cell>
          <mt-cell title="Austin"></mt-cell>
          <mt-cell title="Aaron"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="C">
          <mt-cell title="Caldwin"></mt-cell>
          <mt-cell title="Craden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="D">
          <mt-cell title="Daldwin"></mt-cell>
          <mt-cell title="Draden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="E">
          <mt-cell title="Ealdwin"></mt-cell>
          <mt-cell title="Eraden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="F">
          <mt-cell title="Faldwin"></mt-cell>
          <mt-cell title="Fraden"></mt-cell>
        </mt-index-section>
        ……
        <mt-index-section index="Z">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexlist"
    }
</script>

<style scoped>

</style>
