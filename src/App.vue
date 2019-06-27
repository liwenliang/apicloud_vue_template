<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      timer: null
    }
  },
  created() {
    this.checkApiReady()
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
  },
  methods: {
    checkApiReady() {
      this.timer = setInterval(() => {
        if (window.api) {
          this.setTabBar()
          clearInterval(this.timer)
        }
      }, 300)
    },
    setTabBar() {
      const api = window.api
      var NVTabBar = api.require('NVTabBar')
      NVTabBar.open({
        items: [
          {
            w: api.winWidth / 4.0,
            iconRect: {
              w: 25.0,
              h: 25.0
            },
            icon: {
              normal: 'widget://image/detail_booking_icon.png',
              selected: 'widget://image/detail_booking_icon.png'
            },
            title: {
              text: '动态',
              normal: '#696969',
              selected: '#ff3a5c'
            }
          },
          {
            w: api.winWidth / 4.0,
            iconRect: {
              w: 25.0,
              h: 25.0
            },
            icon: {
              normal: 'widget://image/detail_cardicon.png',
              selected: 'widget://image/detail_cardicon.png'
            },
            title: {
              text: '发现',
              normal: '#696969',
              selected: '#ff3a5c'
            }
          },
          {
            w: api.winWidth / 4.0,
            iconRect: {
              w: 25.0,
              h: 25.0
            },
            icon: {
              normal: 'widget://image/detail_couponicon.png',
              selected: 'widget://image/detail_couponicon.png'
            },
            title: {
              text: '消息',
              normal: '#696969',
              selected: '#ff3a5c'
            }
          },
          {
            w: api.winWidth / 4.0,
            iconRect: {
              w: 25.0,
              h: 25.0
            },
            icon: {
              normal: 'widget://image/detail_grouponicon.png',
              selected: 'widget://image/detail_grouponicon.png'
            },
            title: {
              text: '我的',
              normal: '#696969',
              selected: '#ff3a5c'
            }
          }],
        selectedIndex: 0
      }, (ret, err) => {
        window.api.toast({
          msg: JSON.stringify(ret, true, '  '),
          location: 'middle',
          duration: 2000
        })
        const map = {
          0: 'Home',
          1: 'Search'
        }
        if (map[ret.index]) {
          this.$router.replace({ name: map[ret.index] })
        }
      })
    }
  }
}
</script>
<style type="text/scss" lang="scss">
  .app-container {
    padding: 1em;
    background: #fff;
  }
</style>
