<template>
  <mu-dialog :open.sync="openSimple" :overlay-close="false" title="升级提示">
    {{ downloadMessage }}
  </mu-dialog>
</template>

<script>
import util from '@/utils/util'
import { checkUpdate } from '@/api/common'
export default {
  name: 'UpdateWidgets',
  data() {
    return {
      downloadMessage: '',
      openSimple: false
    }
  },
  mounted() {
    this.startCheck()
  },
  methods: {
    startCheck() {
      setTimeout(() => {
        if (window.api) {
          this.checkUpdate()
        } else {
          this.startCheck()
        }
      }, 500)
    },

    // 检测版本升级
    checkUpdate(toast) {
      var app_version = [util.APP_NAME, window.api.systemType, util.VERSION_TYPE, util.APP_VERSION]
      checkUpdate({ app_version: app_version.join('-') }).then(ret => {
        if (ret && ret.code === 0 && ret.data && ret.data.needUpdate && ret.data.lastVersion) {
          var lastVersion = ret.data.lastVersion
          switch (lastVersion.update_type) {
            // 0：不提示，1：提示升级，2：强制升级
            case '1':
              window.api.confirm({
                title: '应用升级',
                msg: lastVersion.describe || '',
                buttons: ['现在升级', '遗憾错过']
              }, (ret, err) => {
                if (ret.buttonIndex === 1) {
                  this.startdown(lastVersion.download_url, 'option', lastVersion.app_version)
                }
              })
              break
            case '2':
              window.api.alert({
                title: '应用升级',
                msg: lastVersion.describe || '',
                buttons: ['确定']
              }, (ret, err) => {
                if (ret.buttonIndex === 1) {
                  this.startdown(lastVersion.download_url, 'force', lastVersion.app_version)
                }
              })
              break
          }
        } else {
          this.openSimple = false
          if (toast) {
            window.api.toast({ msg: '当前已是最新版本！', duration: 3000, location: 'middle' })
          }
        }
      })
    },

    // 关闭当前APP
    closeCurApp() {
      window.api.closeWidget({
        id: util.CUR_APPID,
        silent: true,
        retData: { name: 'closeWidget' },
        animation: {
          type: 'flip',
          subType: 'from_bottom',
          duration: 500
        }
      })
    },

    // 下载APP
    startdown(url, type, app_version) {
      switch (window.api.systemType) {
        case 'ios':
          window.api.installApp({
            appUri: url // 安装包对应plist地址
          })
          this.closeCurApp()
          break
        case 'android':
          window.api.download({
            url: url,
            savePath: 'fs://' + util.APP_NAME + '/update/' + app_version + '.apk',
            report: true,
            cache: false,
            allowResume: true
          }, (ret, err) => {
            if (ret) {
              switch (ret.state) {
                case 2: // 下载失败
                  window.api.alert({
                    title: '更新失败',
                    msg: '下载更新失败,请退出重试',
                    buttons: ['确定']
                  }, (ret, err) => {
                    if (ret.buttonIndex === 1) {
                      this.closeCurApp()
                    }
                  })
                  break
                case 1: // 下载完成
                  window.api.installApp({
                    appUri: ret.savePath
                  })
                  this.openSimple = false
                  this.closeCurApp()
                  break
                case 0: // 下载中
                  var fsize = (ret.fileSize / 1024) / 1024
                  fsize = parseFloat(fsize).toFixed(1)
                  this.downloadMessage = `文件大小：${fsize}M;下载进度：${ret.percent}%;`
                  this.openSimple = true
                  break
              }
            }
          })
          break
      }
    }
  }
}
</script>
