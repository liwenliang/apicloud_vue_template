<template>
  <div>
    <div class="app-container">
      <mu-button color="secondary" @click="goBack">返回</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexVue',
  data() {
    return {
      msg: '首页'
    }
  },
  created() {
    this.$parent.setHeader('二级跳转页面', false, true)
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
