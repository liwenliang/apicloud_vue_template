<template>
  <div>
    <app-header no-logout page-title="测试页"/>
    <div class="app-container">
      <mu-button color="secondary" @click="goBack">返回</mu-button>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/public/AppHeader'

export default {
  name: 'IndexVue',
  components: {
    appHeader
  },
  data() {
    return {
      msg: '首页'
    }
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
