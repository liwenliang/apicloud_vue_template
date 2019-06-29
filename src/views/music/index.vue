<template>
  <div style="padding: 1em;">
    <a href="myfirstapp://" style="font-size: 2em">234b</a>
  </div>
</template>

<script>
export default {
  name: 'Music',
  created() {
    this.$parent.setHeader('音乐列表', true, false)
  }
}
</script>

<style scoped>

</style>
