<template>
  <header :class="theme" class="top-header">
    <div class="top-header-left-logo"/>
    <div class="top-header-right-status">
      <span class="time">3月22日 10:38</span>
      <i :class="`wifi ${onLine?'online':'offline'}`"/>
      <i v-if="theme==='dark'" class="name">W</i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },
  data() {
    return {
      open: false,
      onLine: navigator.onLine
    }
  },
  created() {
    this.checkNetwork()
  },
  methods: {
    checkNetwork() {
      setTimeout(() => {
        this.onLine = navigator.onLine
        this.checkNetwork()
      }, 3000)
    }
  }
}
</script>

<style scoped lang="scss">
  .top-header {
    height: .9rem;
    background-color: #ffffff;

    .top-header-left-logo {
      float: left;
      background: url("../../assets/img/guoyao_logo_blue@2x.png") no-repeat;
      width: 1.95rem;
      height: .48rem;
      margin: .21rem .5rem;
    }

    .top-header-right-status {
      float: right;
      width: 3.64rem;
      height: .9rem;
      box-sizing: border-box;
      padding: .21rem 0rem .21rem .5rem;

      .time {
        font-size: .28rem;
        font-weight: 300;
        line-height: .48rem;
        color: rgba(38, 74, 148, 1);
        margin-right: .3rem;
      }

      .wifi, .name {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        vertical-align: top;
        border-radius: 50%;
        font-size:.29rem;
        font-weight:400;
        color:rgba(38,74,148,1);
        text-align: center;
        line-height:.5rem;
      }

      .offline {
        background: url("../../assets/img/yaonuo_header_no_wifi_icon@2x.png") no-repeat;
      }

      .online {
        background: url("../../assets/img/yaonuo_wifi_blue_icon@2x.png") no-repeat;
      }
    }
  }

  .dark {
    background-color: #264A94;

    .top-header-left-logo {
      background: url("../../assets/img/guoyao_logo_white@2x.png") no-repeat;
    }

    .top-header-right-status {
      width: 4.2rem;

      .time {
        color: #ffffff;
      }

      .name {
        background: white;
        margin-left: .2rem;
      }

      .offline {
        background: url("../../assets/img/yaonuo_header_no_wifi_icon@2x.png") no-repeat;
      }

      .online {
        background: url("../../assets/img/yaonuo_wifi_gray_icon@2x.png") no-repeat;
      }
    }
  }
</style>
