<template>
  <div>
    <app-header :no-go-back="noGoBack" :page-title="pageTitle" :no-logout="noLogout" class="top-nav"/>
    <router-view :key="key" class="main-container"/>
    <app-bottom :tabs="tabs"/>
    <app-drawer ref="appDrawer"/>
  </div>
</template>

<script>
import appHeader from '@/components/public/AppHeader'
import appBottom from '@/components/public/AppBottom'
import appDrawer from '@/components/public/AppDrawer'

export default {
  name: 'Layout',
  components: {
    appHeader,
    appBottom,
    appDrawer
  },
  data() {
    return {
      shift: 'Home',
      pageTitle: '',
      noGoBack: true,
      noLogout: true,
      tabs: [
        {
          value: 'Movie',
          title: '电影',
          icon: 'ondemand_video'
        },
        {
          value: 'Music',
          title: '音乐',
          icon: 'music_note'
        },
        {
          value: 'Book',
          title: '图书',
          icon: 'books'
        },
        {
          value: 'Picture',
          title: '照片',
          icon: 'photo'
        }
      ],
      openDrawer: false
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  created() {
    console.log('--------this.$route--------')
    console.log(this.$route)
    console.log('--------this.$route--------')
  },
  methods: {
    setHeader(pageTitle, noGoBack, noLogout) {
      this.pageTitle = pageTitle
      this.noGoBack = noGoBack
      this.noLogout = noLogout
    },
    showDrawer() {
      this.$refs.appDrawer.showDrawer()
    }
  }
}
</script>

<style type="text/scss" lang="scss">
  .main-container {
    position: relative;
    top: 56px;
    min-height: calc(100vh - 56px);
    background: #fff;
    padding-bottom: 56px;
  }
  .top-nav {
    z-index: 1;
    position: fixed;
    width: 100%;
    top: 0;
  }
  .bottom-nav {
    /*如果不加important，这个属性在打包后会被覆盖*/
    position: fixed !important;
    width: 100%;
    top: calc(100vh - 56px);
  }
</style>
