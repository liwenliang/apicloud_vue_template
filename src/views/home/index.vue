<template>
  <mu-paper :z-depth="1" class="demo-loadmore-wrap">
    <app-header :no-go-back="true" :page-title="msg"/>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more :refreshing="refreshing" :loading="loading" @refresh="refresh()" @load="load">
        <mu-list>
          <mu-list-item v-for="i in num" :key="i">
            <mu-list-item-title>{{ text }} Item {{ i }}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-load-more>
    </mu-container>
  </mu-paper>
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
    refresh() {
      this.refreshing = true
      this.$refs.container.scrollTop = 0
      setTimeout(() => {
        this.refreshing = false
        this.text = this.text === 'List' ? 'Menu' : 'List'
        this.num = 20
      }, 2000)
    },
    load() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.num += 20
      }, 2000)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  h1 {
    text-align: center;
  }
  .demo-loadmore-wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .mu-appbar {
      width: 100%;
    }
  }
  .demo-loadmore-content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
