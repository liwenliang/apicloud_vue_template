<template>
  <div>
    picture
  </div>
</template>

<script>
export default {
  name: 'Picture',
  created() {
    this.$parent.setHeader('图片列表', true, false)
  }
}
</script>

<style scoped>

</style>
