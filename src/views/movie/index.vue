<template>
  <mu-container ref="container">
    <mu-load-more :refreshing="refreshing" :loading="loading" @refresh="refresh" @load="load">
      <mu-list textline="three-line">
        <template v-for="(item, idx) in list">
          <mu-list-item :key="`item${idx}`" avatar button @click="showDetail(item.id)">
            <mu-list-item-action>
              <div style="width: 45px;height:80px;padding-top:6px;">
                <!-- todo 这里用了网上的图片代理服务，后期可以换成自己的，保险一些 -->
                <img :src="`https://images.weserv.nl/?url=${item.images.small}`" width="100%" alt="">
              </div>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{ idx + 1 }}:{{ item.title }}({{ item.year }})</mu-list-item-title>
              <mu-list-item-sub-title>
                <span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">导演：{{ getKeys(item.directors, 'name') }}</span>
              </mu-list-item-sub-title>
              <mu-list-item-sub-title>
                <span style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">主演：{{ getKeys(item.casts, 'name') }}</span>
              </mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider :key="`divide${idx}`"/>
        </template>
      </mu-list>
    </mu-load-more>
    <mu-dialog :open.sync="detailDialogShow" transition="slide-bottom" fullscreen>
      <img :src="`https://images.weserv.nl/?url=${detailItem.images.large}`" style="position: absolute;width: 100%;height: 100%;opacity: 0.1;z-index: 0;" alt="">
      <div style="position: absolute;z-index: 1">
        <mu-appbar :title="detailItem.title" color="primary">
          <mu-button slot="right" icon @click="detailDialogShow=false">
            <mu-icon value="close"/>
          </mu-button>
        </mu-appbar>
        <div class="detail-container">
          <div style="text-align: center;">
            <img :src="`https://images.weserv.nl/?url=${detailItem.images.large}`" alt="">
          </div>
          <div>
            <p>评分：{{ detailItem.rating.average }}</p>
            <p>导演：{{ getKeys(detailItem.directors, 'name') }}</p>
            <p>主演：{{ getKeys(detailItem.casts, 'name') }}</p>
            <h3>摘要</h3>
            <p style="text-indent: 2em;">{{ detailItem.summary }}</p>
          </div>
        </div>
      </div>
    </mu-dialog>
  </mu-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { top250, getMovieDetail } from '@/api/douban'

export default {
  name: 'Movie',
  data() {
    return {
      list: [],
      page: 1,
      page_size: 20,
      refreshing: false,
      loading: false,
      detailDialogShow: false,
      detailItem: {
        rating: {},
        images: {},
        directors: [],
        casts: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'movieInfo'
    ])
  },
  created() {
    this.$parent.setHeader('电影列表', true, false)
    if (this.movieInfo.movieList.length > 0) {
      this.list = [...this.movieInfo.movieList]
      this.page = this.movieInfo.page
      this.page_size = this.movieInfo.page_size
    } else {
      this.getList()
    }
  },
  methods: {
    getKeys(arr, key) {
      return arr.map(item => {
        return item[key]
      }).join('，')
    },
    showDetail(id) {
      getMovieDetail({ id }).then(res => {
        this.detailItem = res
        this.detailDialogShow = true
      })
    },
    getList(reset) {
      top250({ page: this.page, page_size: this.page_size }).then(res => {
        if (reset) {
          this.list = res.subjects
        } else {
          this.list.push(...res.subjects)
        }
        this.$store.commit('movie/setMovieInfo', {
          page: this.page,
          page_size: this.page_size,
          movieList: this.list
        })
        this.refreshing = false
        this.loading = false
      })
    },
    refresh() {
      this.refreshing = true
      this.$refs.container.scrollTop = 0
      this.page = 1
      this.getList(true)
    },
    load() {
      this.loading = true
      this.page++
      this.getList()
    }
  }
}
</script>

<style scoped lang="scss">
  .detail-container{
    padding: 1em;
    overflow: auto;
    height: calc(100vh - 56px);
  }
</style>
