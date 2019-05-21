<template>
  <section class="wrapper" style="height: 100vh;">
    <div class="guoyao-logo"/>
    <form class="yaonuo-login-form">
      <div class="yaonuo-login-input-box">
        <span class="yaonuo-login-input-icon account"/>
        <input v-model="mobile" tabindex="1" type="number" maxlength="11" placeholder="请输入用户名" class="yaonuo-login-input">
        <span class="yaonuo-login-input-tip">{{ mobileTipText }}</span>
      </div>
      <div class="yaonuo-login-input-box">
        <span class="yaonuo-login-input-icon pw"/>
        <input v-model="password" tabindex="2" type="password" placeholder="请输入密码" class="yaonuo-login-input">
      </div>
      <button class="yaonuo-login-btn" @click="submit">登录</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      mobile: '',
      mobileTipText: '用户名为11位长度的手机号',
      password: '',
      passwordErrorText: '',
      visibility: false
    }
  },
  methods: {
    onMobileChanged(val) {
      if (val) {
        const reg = /^1\d{10}$/g
        if (!reg.test(val)) {
          window.api.toast({
            msg: `请输入正确的11位手机号`,
            location: 'middle',
            duration: 2000
          })
        } else {
          return true
        }
      } else {
        window.api.toast({
          msg: `请输入手机号`,
          location: 'middle',
          duration: 2000
        })
      }
      return false
    },
    onPasswordChanged(val) {
      if (val) {
        this.passwordErrorText = ''
        return true
      }
      return false
    },
    submit() {
      if (!this.onMobileChanged(this.mobile)) {
        return
      }
      if (!this.onPasswordChanged(this.password)) {
        return
      }
      window.api && window.api.showProgress({
        title: '正在登录...',
        modal: false
      })
      this.$store.dispatch('user/Login', { mobile: this.mobile, password: this.password }).then((res) => {
        window.api && window.api.hideProgress()
        if (res.code === 0) {
          this.$router.push({ path: '/' })
        } else {
          window.api.toast({
            msg: `${res.msg}`,
            location: 'middle',
            duration: 2000
          })
        }
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
  @import '../../assets/css/yaonuo.login.css';
</style>
