<template>
  <div>
    <app-header no-go-back page-title="首页"/>
    <div class="app-container">
      <mu-button color="primary" @click="gotoSome">进入测试页</mu-button>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/public/AppHeader'
export default {
  name: 'Home',
  components: {
    appHeader
  },
  data() {
    return {
      msg: '首页',
      num: 20,
      refreshing: false,
      loading: false,
      text: 'List'
    }
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
