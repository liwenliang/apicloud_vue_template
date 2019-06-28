<template>
  <mu-bottom-nav :value.sync="value" class="bottom-nav" shift @change="onTabChange">
    <mu-bottom-nav-item v-for="(item, idx) in tabs" :key="idx" :value="item.value" :title="item.title" :icon="item.icon"/>
  </mu-bottom-nav>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      value: this.$route.name
    }
  },
  methods: {
    onTabChange(tabName) {
      this.$router.replace({ name: tabName })
    }
  }
}
</script>
