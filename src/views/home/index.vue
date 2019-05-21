<template>
  <div>
    <app-header :no-go-back="true" :page-title="msg"/>
    <div>
      content
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
      msg: '首页'
    }
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
