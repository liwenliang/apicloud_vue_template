<template>
  <div class="login-con">
    <img
      style="position: absolute;z-index: -1;top:0;width: 100%;height: 100%;"
      src="../../assets/images/bg@2x.png"
      alt="">
    <div class="title">管理员登录</div>
    <div class="logo">
      <img src="@/assets/images/logo@2x.png">
    </div>
    <div class="form">
      <mu-text-field
        v-model="mobile"
        :max-length="11"
        :error-text="mobileErrorText"
        label="手机号"
        label-float
        full-width
        type="number"
        help-text="用户名为11位长度的手机号"
        icon="account_circle"
        @change="onMobileChanged"/>
      <br>
      <mu-text-field
        v-model="password"
        :action-icon="visibility ? 'visibility_off' : 'visibility'"
        :action-click="() => (visibility = !visibility)"
        :type="visibility ? 'text' : 'password'"
        :error-text="passwordErrorText"
        label-float
        full-width
        icon="locked"
        label="密码"
        @keyup.enter="submit"
        @change="onPasswordChanged"/>
      <br>
    </div>

    <div class="btn-area">
      <a class="submit-btn" @click="submit">登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      mobile: '',
      mobileErrorText: '',
      password: '',
      passwordErrorText: '',
      visibility: false
    }
  },
  methods: {
    onMobileChanged(val) {
      if (val) {
        if (val.length !== 11) {
          this.mobileErrorText = '请输入11位手机号'
        } else {
          this.mobileErrorText = ''
          return true
        }
      } else {
        this.mobileErrorText = '请输入手机号'
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
          this.$router.push({ path: this.redirect || '/' })
        } else {
          window.api.toast({
            msg: `${res.msg}`,
            duration: 2000
          })
        }
      }).catch(() => {
      })
    }
  }
}
</script>

<style type="text/scss" scoped lang="scss">
  .login-con {
    padding-top: 0.79rem;
    .title {
      text-align: center;
      height: 0.39rem;
      font-size: 0.41rem;
      font-family: SourceHanSansCN-Medium;
      color: rgba(0, 0, 0, 1);
      opacity: 0.8;
    }

    .logo {
      margin-top: 1.65rem;
      text-align: center;
      img {
        width: 1.49rem;
        height: 1.49rem;
      }
    }

    .form {
      margin-top: 1rem;
      padding: 0 0.4rem;
    }

    .btn-area {
      margin: 1rem auto;
      width: 5.78rem;
      height: 0.8rem;
      background: rgba(255, 255, 255, 1);
      opacity: 0.3;
      border-radius: 0.4rem;
      text-align: center;
      cursor: pointer;
      a {
        font-size: 0.36rem;
        line-height: 0.8rem;
        color: #000;
        opacity: 1;
      }
    }
  }
</style>
