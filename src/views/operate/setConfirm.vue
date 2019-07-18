<template>
  <div class="operate-container">
    <div class="title">
      <i class="icon-right"/>
      <span class="text">请确认补衣操作</span>
    </div>
    <div class="desc-area">
      <p>大码：放入<span class="red"> 10 </span>件，取出<span class="red"> 2 </span>件</p>
      <p>中码：放入<span class="red"> 10 </span>件，取出<span class="red"> 2 </span>件</p>
      <p>小码：放入<span class="red"> 10 </span>件，取出<span class="red"> 2 </span>件</p>
    </div>
    <div class="opt-area">
      <mu-button class="opt-button red">首页</mu-button>
      <mu-button class="opt-button green">完成补衣</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetVue',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .operate-container {
    box-sizing: border-box;
    padding: .8rem 0 0 0.98rem;

    .title {
      .icon-right {
        display: inline-block;
        width: .45rem;
        height: .42rem;
        background: url("../../assets/img/icon-right.png") no-repeat;
        vertical-align: top;
        margin-top: 0.08rem;
        margin-right: .2rem;
      }

      .text {
        font-size: .40rem;
        font-weight: 400;
        color: rgba(6, 17, 31, 1);
      }
    }

    .desc-area {
      margin-top: .55rem;
      padding: 0 0 0 .65rem;

      p {
        font-size: .28rem;
        font-weight: 300;
        color: rgba(6, 17, 31, 1);
        line-height: .56rem;
      }

      .red {
        color: #F57C6C
      }

      .green {
        color: #2EB6AA;
      }
    }

    .opt-area {
      margin-top: 1.82rem;
      padding: 0 0 0 .65rem;

      .opt-button {
        width: 1.8rem;
        height: .64rem;
        border-radius: .32rem;
        font-size: .30rem;
        text-align: center;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-right: .2rem;
      }

      .red {
        background: #F57C6C
      }

      .green {
        background: #2EB6AA;
      }
    }
  }
</style>
