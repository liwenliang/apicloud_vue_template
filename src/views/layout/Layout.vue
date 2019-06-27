<template>
  <div style="padding-bottom: 55px;">
    <UpdateWidgets/>
    <app-header :no-go-back="noGoBack" :page-title="pageTitle" :no-logout="noLogout"/>
    <router-view v-transition :key="key" style="padding-top: 55px;"/>
  </div>
</template>

<script>
import appHeader from '@/components/public/AppHeader'
import UpdateWidgets from '@/components/widgets/update'
export default {
  name: 'Layout',
  components: {
    appHeader,
    UpdateWidgets
  },
  data() {
    return {
      pageTitle: '',
      noGoBack: true,
      noLogout: true
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  methods: {
    setHeader(pageTitle, noGoBack, noLogout) {
      this.pageTitle = pageTitle
      this.noGoBack = noGoBack
      this.noLogout = noLogout
    }
  }
}
</script>
