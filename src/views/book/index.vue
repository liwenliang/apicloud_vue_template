<template>
  <div>book</div>
</template>

<script>
export default {
  name: 'Book',
  created() {
    this.$parent.setHeader('图书列表', true, false)
  }
}
</script>

<style scoped>

</style>
