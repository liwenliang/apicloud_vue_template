<template>
  <div class="operate-container">
    <div class="title">
      <i class="icon-size"/>
      <span class="text">请选择尺码</span>
      <i class="icon-time">{{ timeBack }}</i>
    </div>
    <div class="btn-area">
      <mu-button
        v-for="(item, idx) in buttons"
        :key="idx"
        :class="item.extraClass"
        class="default"
        @click="activeItem(item)">{{ item.label }}
      </mu-button>
    </div>
    <div class="opt-area">
      <mu-button class="opt-button red">首页</mu-button>
      <mu-button class="opt-button green">确认</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetVue',
  data() {
    return {
      timeBack: 120,
      buttons: [
        {
          label: '小码',
          extraClass: ''
        },
        {
          label: '中码',
          extraClass: 'active'
        },
        {
          label: '大码',
          extraClass: ''
        }
      ]
    }
  },
  created() {
    this.startTimeBack()
  },
  methods: {
    startTimeBack() {
      setTimeout(() => {
        this.timeBack--

        if (this.timeBack > 0) {
          this.startTimeBack()
        }
      }, 1000)
    },

    activeItem(item) {
      this.buttons.map(item => {
        item.extraClass = ''
      })
      item.extraClass = 'active'
    }
  }
}
</script>

<style scoped lang="scss">
  .operate-container {
    box-sizing: border-box;
    padding: .8rem 0 0 0.98rem;

    .title {
      .icon-size {
        display: inline-block;
        width: .45rem;
        height: .42rem;
        background: url("../../assets/img/icon-size.png") no-repeat;
        vertical-align: top;
        margin-top: 0.06rem;
      }

      .text {
        font-size: .40rem;
        font-weight: 400;
        color: rgba(6, 17, 31, 1);
      }

      .icon-time {
        display: inline-block;
        width: .46rem;
        height: .47rem;
        background: url("../../assets/img/yaonuo_daojishi_icon@2x.png") no-repeat;
        vertical-align: top;
        margin-top: 0.06rem;

        font-size: .20rem;
        font-weight: 300;
        color: rgba(215, 215, 215, 1);
        line-height: .47rem;
        text-align: center;
      }
    }

    .btn-area {
      margin-top: .55rem;
      padding: 0 0 0 .65rem;

      .default {
        width: 1.8rem;
        height: .7rem;
        background: #D0D0D0;
        text-align: center;
        font-size: .28rem;
        font-weight: 300;
        color: rgba(6, 17, 31, 1);
        margin-right: .3rem;
      }

      .active {
        background: #3497CE;
        color: rgba(255, 255, 255, 1);
      }
    }

    .opt-area {
      margin-top: 3.03rem;
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
