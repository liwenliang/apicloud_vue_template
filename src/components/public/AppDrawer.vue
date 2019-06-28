<template>
  <mu-drawer :open.sync="openDrawer" :docked="false" >
    <mu-list textline="two-line">
      <mu-list-item>
        <mu-list-item-content>
          <mu-list-item-title>通知与信息设置</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-sub-header>声音开启设置</mu-sub-header>
      <mu-list-item :ripple="false" button @click="events = !events">
        <mu-list-item-title>
          事件和提醒
        </mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="events" readonly/>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item :ripple="false" button @click="calls = !calls">
        <mu-list-item-title>
          电话
        </mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="calls" readonly/>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item :ripple="false" button @click="messages = !messages">
        <mu-list-item-title>
          信息
        </mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="messages" readonly/>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>通知设置</mu-sub-header>
      <mu-list-item :ripple="false" button @click="notifications = !notifications">
        <mu-list-item-action>
          <mu-checkbox v-model="notifications" readonly/>
        </mu-list-item-action>
        <mu-list-item-title>
          通知
        </mu-list-item-title>
      </mu-list-item>
      <mu-list-item :ripple="false" button @click="sounds = !sounds">
        <mu-list-item-action>
          <mu-checkbox v-model="sounds" readonly/>
        </mu-list-item-action>
        <mu-list-item-title>
          声音
        </mu-list-item-title>
      </mu-list-item>
      <mu-list-item :ripple="false" button @click="videoSounds = !videoSounds">
        <mu-list-item-action>
          <mu-checkbox v-model="videoSounds" readonly/>
        </mu-list-item-action>
        <mu-list-item-title>
          视频的声音
        </mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
export default {
  name: 'AppDrawer',
  data() {
    return {
      openDrawer: false,
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
    }
  },
  methods: {
    showDrawer() {
      this.openDrawer = true
    }
  }
}
</script>

<style scoped>

</style>
