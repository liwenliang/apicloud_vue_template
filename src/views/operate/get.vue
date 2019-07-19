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
      <mu-button class="opt-button red" @click="goHome">首页</mu-button>
      <mu-button class="opt-button green" @click="giveMeAClothes">确认</mu-button>
    </div>
  </div>
</template>

<script>
import store from 'store'

const DefaultGridObj = {}
for (let i = 1; i <= 99; i++) {
  DefaultGridObj[i] = {
    type: 'empty',
    before: 'empty'
  }
}
export default {
  name: 'GetVue',
  data() {
    return {
      gridObj: store.get('gridObj') || JSON.parse(JSON.stringify(DefaultGridObj)),
      timeBack: 120,
      buttons: [
        {
          label: '小码',
          name: 'small',
          extraClass: ''
        },
        {
          label: '中码',
          name: 'medium',
          extraClass: 'active'
        },
        {
          label: '大码',
          name: 'big',
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
    },

    goHome() {
      this.$router.replace({ name: 'Home' })
    },

    giveMeAClothes() {
      const item = this.buttons.find(item => {
        return item.extraClass === 'active'
      })
      this.$alert(`给我一件${item.label}的衣服`, '提示', {
        okLabel: '知道了'
      }).then(() => {
        const name = item.name
        for (const key in this.gridObj) {
          if (this.gridObj.hasOwnProperty(key)) {
            if (this.gridObj[key].type === name) {
              this.gridObj[key].type = 'empty'
              this.gridObj[key].before = 'empty'
              break
            }
          }
        }
        store.set('gridObj', this.gridObj)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/variables";
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
        color: $black;
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
        color: $gray;
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
        background: $gray;
        text-align: center;
        font-size: .28rem;
        font-weight: 300;
        color: $black;
        margin-right: .3rem;
      }

      .active {
        background: $blue;
        color: $white;
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
        color: $white;
        margin-right: .2rem;
      }

      .red {
        background: $red;
      }

      .green {
        background: $green;
      }
    }
  }
</style>
