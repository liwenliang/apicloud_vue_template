<template>
  <div>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
    <mu-button color="primary" @click="goback">返回</mu-button>
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
  created() {
    alert(this.$route.query.id)
  },
  methods: {
    goback() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
