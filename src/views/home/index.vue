<template>
  <div>
    <div class="app-container">
      <mu-button color="primary" @click="gotoSome">进入测试页</mu-button>
      <mu-button color="primary" @click="gotoSome">进入测试页</mu-button>
      <mu-button color="primary" @click="gotoSome">进入测试页</mu-button>
      <mu-button color="primary" @click="gotoSome">进入测试页</mu-button>
      <mu-button color="primary" @click="gotoSome">进入测试页</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: '首页',
      num: 20,
      refreshing: false,
      loading: false,
      text: 'List'
    }
  },
  created() {
    this.$parent.setHeader('首页', true, false)
  },
  methods: {
    gotoSome() {
      this.$router.push({ name: 'HomeTemp' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
