<template>
  <div>
    <mu-appbar color="primary">
      <mu-button slot="left" icon color="fff" @click="showMenu">
        <mu-icon value="menu"/>
      </mu-button>
      <div style="text-align: center;">
        {{ pageTitle }}
      </div>
      <mu-avatar slot="right">
        <img src="../../assets/img/uicon.jpg">
      </mu-avatar>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    pageTitle: {
      type: String,
      default: 'noTitle'
    }
  },
  // data() {
  //   return {
  //     headerStyle: {
  //       paddingTop: '20px',
  //       backgroundColor: '#2196f3'
  //     }
  //   }
  // },
  mounted() {
    // if (window.api && window.api.safeArea) {
    //   this.headerStyle.paddingTop = window.api.safeArea.top + 'px'
    // }
  },
  methods: {
    doLogout() {
      this.$confirm('退出登录？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$store.dispatch('user/FedLogOut').then(() => {
            this.$router.push('/login')
          })
        }
      })
    },
    showMenu() {
      this.$parent.showDrawer()
    }
  }
}
</script>

<style lang="scss">

</style>
