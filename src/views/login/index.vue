<template>
  <div class="yaonuo-container">
    <div class="top">
      <div class="left-card">
        <img src="../../assets/img/guoyao_logo_blue_home@2x.png" alt="">
        <div class="title">
          请刷卡登录
        </div>
        <img src="../../assets/img/yaonuo_card_icon@2x.png" alt="" @click="doLogin">
        <div class="text-area">
          <div class="hos-title">
            首都医科大学附属医院
          </div>
          <div class="desc-area">
            <p>回收柜名称：某某名称 回收柜类型：某某类</p>
            <p>归属科室：某某科室、某某科室</p>
          </div>
        </div>
      </div>
      <div class="right-card">
        <div :class="`right-card-top ${statusClass}`">
          <div v-show="statusClass==='normal'" class="text-item">
            大码：<span class="ok">剩余50件</span>
          </div>
          <div v-show="statusClass==='normal'" class="text-item">
            中码：<span class="ok err">剩余50件</span>
          </div>
          <div v-show="statusClass==='normal'" class="text-item">
            小码：<span class="ok">剩余50件</span>
          </div>
        </div>
        <div class="right-card-center">
          <a v-show="statusClass==='normal'" class="btn normal" href="javascript:;" @click="openSimple = true">可领取衣物</a>
          <a v-show="statusClass==='unnormal'" class="btn unnormal" href="javascript:;">柜子已停用</a>
        </div>
        <div class="right-card-bottom">
          <i class="icon-wifi"/>
          3月22日 10:38
        </div>
      </div>
    </div>
    <div class="bottom-info">
      <p>联系电话：18521033333</p>
    </div>

    <mu-dialog :open.sync="openSimple" title="Dialog" dialog-class="custom-dialog">
      this is simple Dialog
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      statusClass: 'normal',
      openSimple: false
    }
  },
  methods: {
    doLogin() {
      this.$store.dispatch('user/Login', { mobile: 15701536183, password: 123456 }).then(res => {
        if (res.code === 0) {
          this.$router.replace({ name: 'Home' })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  $mainColor: rgba(17, 213, 198, 1);

  .yaonuo-container {
    height: 100vh;
    background: url("../../assets/img/yaonuo_bg.jpg");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    padding: 1.10rem 0rem .72rem 1.01rem;
    height: 100vh;
    box-sizing: border-box;

    .top::after {
      content: '';
      display: block;
      clear: both;
      overflow: hidden;
    }

    .left-card {
      float: left;
      width: 5.80rem;
      height: 5.80rem;
      box-sizing: border-box;
      text-align: center;
      padding: .23rem .40rem 0 .40rem;
      background: url("../../assets/img/left-card-bg.png") no-repeat;
      background-size: 100% 100%;

      .title {
        margin: .51rem 0 .34rem 0;
        font-size: .48rem;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: rgba(38, 74, 148, 1);
      }

      .text-area {
        margin-top: .57rem;
        padding: .2rem 0 .27rem 0;
        text-align: left;
        border-top: 0.01rem dashed rgba(38, 74, 148, 1);

        .hos-title {
          font-size: .28rem;
          font-weight: 400;
          color: rgba(111, 111, 111, 1);
        }

        .desc-area {
          font-size: .20rem;
          font-weight: 300;
          color: rgba(111, 111, 111, 1);
          line-height: .41rem;

          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }

    .right-card {
      float: left;
      width: 3.87rem;
      height: 5.8rem;
      box-sizing: border-box;
      margin-left: 1rem;
      padding-top: 0.41rem;

      .right-card-top {
        box-sizing: border-box;
        padding: .83rem .59rem .52rem 1.03rem;
        width: 3.87rem;
        height: 3.51rem;
        background-size: 100% 100%;

        .text-item {
          font-size: .34rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);

          &:not(:first-child) {
            margin-top: .32rem;
          }

          span.ok, span.err {
            font-size: .22rem;
            font-weight: 400;
            padding-bottom: .1rem;
            vertical-align: top;
          }

          span.ok {
            color: rgba(91, 182, 71, 1);
            border-bottom: .03rem solid rgba(91, 182, 71, 1);
          }

          span.err {
            color: #F57C6C;
            border-bottom: .03rem solid #F57C6C;
          }
        }
      }

      .right-card-top.normal {
        background: url("../../assets/img/right-card-top.png") no-repeat;
      }

      .right-card-top.unnormal {
        background: url("../../assets/img/right-card-top-unnormal.png") no-repeat;
      }

      .right-card-center {
        text-align: center;
        margin-top: .44rem;

        a.btn {
          display: inline-block;
          width: 2.71rem;
          height: .71rem;
          line-height: .71rem;
          border-radius: .35rem;
          font-size: .40rem;
          font-weight: 400;
          opacity: 0.8;
        }

        a.btn.normal {
          color: $mainColor;
          border: .03rem solid $mainColor;
        }

        a.btn.unnormal {
          color: #FF6000;
          border: .03rem solid #FF6000;
        }
      }

      .right-card-bottom {
        margin-top: .25rem;
        text-align: center;
        font-size: 28px;
        font-weight: 300;
        color: $mainColor;
        opacity: 0.8;

        .icon-wifi {
          display: inline-block;
          width: .30rem;
          height: .21rem;
          background: url('../../assets/img/yaonuo_wifi_green_icon@2x.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }

    .bottom-info {
      font-size: .20rem;
      margin-top: .19rem;
      padding-left: .41rem;
      font-weight: 300;
      color: rgba(215, 215, 215, 1);
      line-height: 30px;
      opacity: 0.8;
    }
  }
</style>
