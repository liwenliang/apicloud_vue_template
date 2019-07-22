<template>
  <div class="operate-container">
    <div class="title">
      <i class="icon-gezi"/>
      <span class="text">设置</span>
    </div>
    <div class="settings-area">
      <mu-form ref="form" :model="settingForm" :label-width="121" class="mu-demo-form" label-position="left">
        <mu-flex justify-content="between">
          <mu-flex>
            <mu-form-item label="柜子名称" prop="name">
              <mu-text-field v-model="settingForm.name" placeholder="请输入柜子名称"/>
            </mu-form-item>
          </mu-flex>
          <mu-flex>
            <mu-form-item label="硬件id" prop="id">
              <mu-text-field v-model="settingForm.id" disabled placeholder="请输入硬件ID"/>
            </mu-form-item>
          </mu-flex>
        </mu-flex>
        <mu-flex justify-content="between">
          <mu-flex>
            <mu-form-item label="所属医院" prop="hospital">
              <mu-select v-model="settingForm.hospital" filterable full-width placeholder="请选择所属医院">
                <mu-option label="北京协和医院" value="0"/>
                <mu-option label="北京同仁医院" value="1"/>
                <mu-option label="北京军区总医院" value="2"/>
              </mu-select>
            </mu-form-item>
          </mu-flex>
          <mu-flex>
            <mu-form-item label="所属科室" prop="department">
              <mu-select v-model="settingForm.department" filterable full-width placeholder="请选择所属科室">
                <mu-option label="骨科" value="0"/>
                <mu-option label="内科" value="1"/>
                <mu-option label="外科" value="2"/>
              </mu-select>
            </mu-form-item>
          </mu-flex>
        </mu-flex>
        <mu-flex justify-content="between">
          <mu-flex>
            <mu-form-item label="柜子类型" prop="type">
              <mu-select v-model="settingForm.type" filterable full-width placeholder="请选择柜子类型">
                <mu-option label="发衣柜" value="0"/>
                <mu-option label="发鞋柜" value="1"/>
              </mu-select>
            </mu-form-item>
          </mu-flex>
          <mu-flex>
            <mu-form-item label="柜子位置" prop="position">
              <mu-text-field v-model="settingForm.position" placeholder="请输入柜子类型"/>
            </mu-form-item>
          </mu-flex>
        </mu-flex>
      </mu-form>
    </div>
    <div class="opt-area">
      <mu-button class="opt-button red" @click="goHome">首页</mu-button>
      <mu-button class="opt-button green">保存</mu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetVue',
  data() {
    return {
      settingForm: {
        name: '',
        id: '',
        hospital: '',
        department: '',
        type: '',
        position: ''
      }
    }
  },
  methods: {
    goHome() {
      this.$router.replace({ name: 'Home' })
    }
  }
}
</script>

<style type="text/css" lang="scss">
  .settings-area {
    margin-top: .59rem;
    box-sizing: border-box;
    padding: 0 1rem 0 .65rem;
    height: 2.16rem;

    .mu-form-item-label {
      font-size: .22rem;
      font-weight: 400;
      color: rgba(6, 17, 31, 1);
      opacity: 0.9;
    }

    .mu-input-content {
      width: 3.21rem;
      height: .41rem;
      border: 1px solid rgba(37, 44, 60, 1);
      border-radius: .02rem;
      padding: 0 .1rem;

      font-size: .20rem;
      opacity: 0.8;
      font-weight: 300;
    }
  }
</style>

<style scoped lang="scss">
  @import "../../assets/scss/variables.scss";
  .operate-container {
    box-sizing: border-box;
    padding: .8rem 0 0 0.98rem;

    .title {
      .icon-gezi {
        display: inline-block;
        width: .45rem;
        height: .42rem;
        background: url("../../assets/img/icon-settings.png") no-repeat;
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

    .opt-area {
      margin-top: 1.52rem;
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
        background: $red
      }

      .green {
        background: $green;
      }
    }
  }
</style>
