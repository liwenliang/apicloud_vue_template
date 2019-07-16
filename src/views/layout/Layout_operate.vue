<template>
  <div class="operate-layout">
    <app-header theme="dark"/>
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
  .operate-layout {
    height: 100vh;
    background: url("../../assets/img/yaonuo_body_icon@2x.png") no-repeat;
    background-position: bottom right;
  }
</style>
