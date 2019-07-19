<template>
  <div class="operate-container">
    <div class="title">
      <i class="icon-right"/>
      <span class="text">请确认补衣操作</span>
    </div>
    <div class="desc-area">
      <p>大码：{{ bigDiff>=0 ? '放入': '取出' }}<span class="red"> {{ Math.abs(bigDiff) }} </span>件</p>
      <p>中码：{{ mediumDiff>=0 ? '放入': '取出' }}<span class="red"> {{ Math.abs(mediumDiff) }} </span>件</p>
      <p>小码：{{ smallDiff>=0 ? '放入': '取出' }}<span class="red"> {{ Math.abs(smallDiff) }} </span>件</p>
    </div>
    <div class="opt-area">
      <mu-button class="opt-button red" @click="goHome">首页</mu-button>
      <mu-button class="opt-button green" @click="completeOption">完成补衣</mu-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GetVue',
  data() {
    return {
      bigDiff: 0,
      mediumDiff: 0,
      smallDiff: 0
    }
  },
  computed: {
    ...mapGetters([
      'beforeGridObj',
      'gridObj'
    ])
  },
  created() {
    this.getGridDiffent()
  },
  methods: {
    getGridDiffent() {
      const before = {
        big: 0,
        medium: 0,
        small: 0,
        empty: 0
      }
      for (const key in this.beforeGridObj) {
        if (this.beforeGridObj.hasOwnProperty(key)) {
          before[this.beforeGridObj[key].type]++
        }
      }

      const current = {
        big: 0,
        medium: 0,
        small: 0,
        empty: 0
      }
      for (const key in this.gridObj) {
        if (this.gridObj.hasOwnProperty(key)) {
          current[this.gridObj[key].type]++
        }
      }

      this.bigDiff = current.big - before.big
      this.mediumDiff = current.medium - before.medium
      this.smallDiff = current.small - before.small
    },

    completeOption() {
      this.$router.replace({ name: 'Home' })
    },

    goHome() {
      this.$router.replace({ name: 'Home' })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables.scss";
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
        color: $black;
      }
    }

    .desc-area {
      margin-top: .55rem;
      padding: 0 0 0 .65rem;

      p {
        font-size: .28rem;
        font-weight: 300;
        color: $black;
        line-height: .56rem;
      }

      .red {
        color: $red;
      }

      .green {
        color: $green;
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
        color: $white;
        margin-right: .2rem;
      }

      .red {
        background:$red;
      }

      .green {
        background: $green;
      }
    }
  }
</style>
