<template>
  <div>
    <UpdateWidgets/>
    <transition name="fade" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>

import UpdateWidgets from '@/components/widgets/update'
export default {
  name: 'Layout',
  components: {
    UpdateWidgets
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
