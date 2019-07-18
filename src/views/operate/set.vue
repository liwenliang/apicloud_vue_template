<template>
  <div class="operate-container">
    <div class="title">
      <i class="icon-gezi"/>
      <span class="text">请确认补衣操作</span>
    </div>
    <div class="desc-area">
      <div class="gezi-area">
        <mu-row>
          <div v-for="(item, key) in gridObj" :key="key">
            <div
              :class="item.type"
              :data-idx="key"
              class="grid-cell"
              @click="gridClicked(key)"
              @touchstart.stop="gridMouseDown(key)"
              @touchmove.stop="gridMouseOver($event)"
              @touchend.stop="gridMouseUp($event)">
              {{ formatNum(key) }}
            </div>
          </div>
        </mu-row>
      </div>
      <div class="info-area">
        <div class="btn-area">
          <p><mu-button class="btn big" @click="setActive('big')">大码</mu-button>当前 {{ getNum('big') }} 个</p>
          <p><mu-button class="btn medium" @click="setActive('medium')">中码</mu-button>当前 {{ getNum('medium') }} 个</p>
          <p><mu-button class="btn small" @click="setActive('small')">小码</mu-button>当前 {{ getNum('small') }} 个</p>
          <p><mu-button class="btn empty" @click="setActive('empty')">空格子</mu-button>当前 {{ getNum('empty') }} 个</p>
        </div>
        <div class="clear-area">
          <mu-button class="button red" @click="resetGrid">清空选择</mu-button>
        </div>
      </div>
    </div>
    <div class="opt-area">
      <mu-button class="opt-button green" @click="confirmInfo">确认</mu-button>
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
      beforeGridObj: store.get('gridObj') || JSON.parse(JSON.stringify(DefaultGridObj)),
      gridObj: store.get('gridObj') || JSON.parse(JSON.stringify(DefaultGridObj)),
      startMouseOver: false,
      downIndex: -1,
      overIndex: -1,
      upIndex: -1
    }
  },
  created() {
  },
  methods: {
    formatNum(num) {
      if (num < 10) {
        return '0' + num
      } else {
        return num
      }
    },

    gridClicked(idx) {
      this.gridObj[idx].type = 'opening'
    },

    gridMouseDown(idx) {
      this.startMouseOver = true
      this.downIndex = idx
    },

    gridMouseUp($event) {
      var myLocation = $event.changedTouches[0]
      var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY)
      this.startMouseOver = false
      this.upIndex = realTarget.dataset.idx

      this.opening = []
      for (let i = Math.min(this.downIndex, this.upIndex); i <= Math.max(this.downIndex, this.upIndex); i++) {
        this.gridObj[i].type = 'opening'
      }
    },

    gridMouseOver($event) {
      if (!this.startMouseOver) {
        return
      }
      var myLocation = $event.changedTouches[0]
      var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY)
      this.overIndex = realTarget.dataset.idx

      this.resetGrid()

      for (let i = Math.min(this.downIndex, this.overIndex); i <= Math.max(this.downIndex, this.overIndex); i++) {
        this.gridObj[i].type = 'opening'
      }
    },

    setActive(type) {
      for (const key in this.gridObj) {
        if (this.gridObj.hasOwnProperty(key)) {
          if (this.gridObj[key].type === 'opening') {
            this.gridObj[key].before = type
            this.gridObj[key].type = type
          }
        }
      }
    },

    resetGrid() {
      for (const key in this.gridObj) {
        if (this.gridObj.hasOwnProperty(key)) {
          this.gridObj[key].type = this.gridObj[key].before
        }
      }
    },

    getNum(type) {
      let num = 0
      for (const key in this.gridObj) {
        if (this.gridObj.hasOwnProperty(key)) {
          if (this.gridObj[key].type === type) {
            num += 1
          }
        }
      }
      return num
    },

    confirmInfo() {
      this.$store.commit('app/setBeforeGridObj', this.beforeGridObj)
      this.$store.commit('app/setGridObj', this.gridObj)
      store.set('gridObj', this.gridObj)
      this.$router.replace({ name: 'OperateSetConfirm' })
    }
  }
}
</script>

<style scoped lang="scss">
  .operate-container {
    box-sizing: border-box;
    padding: .8rem 0 0 0.98rem;

    .title {
      .icon-gezi {
        display: inline-block;
        width: .45rem;
        height: .42rem;
        background: url("../../assets/img/icon-gezi.png") no-repeat;
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
      margin-top: .24rem;
      padding: 0 0 0 .65rem;

      &::after {
        content: '';
        display: block;
        clear: both;
        overflow: hidden;
      }

      .big {
        background: #3497CE;
      }

      .medium {
        background: #2EB6AA;
      }

      .small {
        background: #F2BC00;
      }

      .empty {
        background: #D0D0D0;
      }

      .opening {
        background: #F57C6C;
      }

      .gezi-area {
        float: left;
        width: 8.1rem;
        height: 3.63rem;
        border-radius: .1rem;

        .grid-cell {
          width: .9rem;
          height: .33rem;
          font-size: .18rem;
          line-height: .33rem;
          font-weight: 400;
          text-align: center;
          color: rgba(254, 254, 254, 1);
          outline: .02rem dashed white;
          cursor: pointer;
          transition: background-color 100ms;

          &::selection {
            user-select: none;
          }
        }
      }

      .info-area {
        float: left;
        box-sizing: border-box;
        margin-left: .32rem;
        padding-top: .2rem;

        .btn-area {
          p {
            margin-bottom: .09rem;
            height: .4rem;
            line-height: .4rem;
            font-size: .22rem;
            font-weight: 300;
            color: rgba(111, 111, 111, 1);
          }

          .btn {
            display: inline-block;
            width: 1.0rem;
            height: .4rem;
            line-height: .4rem;
            text-align: center;
            font-size: .22rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            margin-right: .2rem;
          }
        }

        .clear-area {
          margin-top: .92rem;

          .button {
            width: 1.4rem;
            height: .4rem;
            line-height: .4rem;
            border-radius: .2rem;
            text-align: center;
            background: #F57C6C;
            font-size: .22rem;
            font-family: SourceHanSansCN-Normal;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }

    .opt-area {
      margin-top: .4rem;
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
