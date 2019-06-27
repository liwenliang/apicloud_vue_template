<template>
  <mu-appbar style="position: fixed;width: 100%;" color="primary">
    <mu-button v-if="!noGoBack" slot="left" icon color="fff" @click="goBack">
      <mu-icon value="keyboard_arrow_left"/>
    </mu-button>
    {{ pageTitle }}
    <mu-button v-if="!noLogout" slot="right" icon color="#fff" @click="doLogout">
      <mu-icon value="logout"/>
    </mu-button>
  </mu-appbar>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    pageTitle: {
      type: String,
      default: 'noTitle'
    },
    noGoBack: {
      type: Boolean,
      default: false
    },
    noLogout: {
      type: Boolean,
      default: false
    }
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
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
  .mu-modal-content{
    .mu-modal-icon {
      float: left;
    }
  }
</style>
