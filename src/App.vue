<template>
  <div id="app">
    <UpdateWidgets/>
    <router-view v-transition/>
  </div>
</template>

<script>
import UpdateWidgets from '@/components/widgets/update'

export default {
  name: 'App',
  components: {
    UpdateWidgets
  },
  mounted() {
    (function(doc, win) {
      const html = doc.getElementsByTagName('html')[0]
      // orientationchange->手机屏幕转屏事件
      // resize->页面大小改变事件(一边pc端有用)
      var reEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
      const reFontSize = function() {
        var clientW = doc.documentElement.clientWidth || doc.body.clientWidth
        if (!clientW) {
          return
        }
        html.style.fontSize = 100 * (clientW / 750) + 'px'
      }
      win.addEventListener(reEvt, reFontSize)
      // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
      doc.addEventListener('DOMContentLoaded', reFontSize)
    })(document, window)
  }
}
</script>
<style type="text/scss" lang="scss">
  #app {
    min-height: 100vh;
    background-color: #fff;
  }
</style>
