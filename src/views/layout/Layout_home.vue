<template>
  <div class="home-layout">
    <app-header theme="light"/>
    <router-view :key="key"/>
  </div>
</template>

<script>
import appHeader from '@/components/public/app-header'

export default {
  name: 'Layout',
  components: {
    appHeader
  },
  data() {
    return {}
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  methods: {}
}
</script>

<style type="text/scss" lang="scss" scoped>
  .home-layout {
    height: 100vh;
    background: url("../../assets/img/yaonuo_bg.jpg");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
