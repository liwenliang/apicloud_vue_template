<template>
  <div>music</div>
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
