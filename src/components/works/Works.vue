<template>
  <div class="works">
    <common-title :desc="desc" :en="en" :isActive="isActive"></common-title>
    <div v-swiper:mySwiper="swiperOptions" class="swiperWrapper" :class="{animated: isActive, zoomIn: isActive}">
      <div class="swiper-wrapper">
        <div class="swiper-slide" @click.stop="open(item.href)" v-for="(item, index) of works.work" :key="index">
          <img :src="item.img">
          <div class="desc">
            <p class="title"><i class="iconfont icon-lianjie"></i>{{item.title}}</p>
            <p class="text">{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonTitle from 'common/commonTitle'
export default {
  name: 'Works',
  props: {
    acIndex: Number,
    works: Object
  },
  data () {
    return {
      desc: '作品集',
      en: 'SAMPLE REELS',
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      isActive: false
    }
  },
  methods: {
    open (url) {
      if (url === '') {
        return false
      } else {
        window.location.href = url
      }
    }
  },
  watch: {
    acIndex () {
      if (this.acIndex === 3) {
        this.isActive = true
      }
    }
  },
  components: {
    commonTitle
  }
}
</script>

<style lang="stylus" scoped>
  .swiperWrapper
    position relative
    width 320px
    height 320px
    border 1px solid #424242
    margin 50px auto
    overflow hidden
    @media screen and (max-width:320px)
      width 300px
      height 300px
    .swiper-slide
      width 100%
      height auto
      img
        width 100%
      .desc
        box-sizing border-box
        position absolute
        bottom 0
        left 0
        right 0
        width 100%
        padding 8px
        background rgba(0,0,0,.6)
        color #fff
        p
          margin 0
        .title
          font-size 14px
          margin-bottom 8px
          i
            margin-right 2px
            vertical-align top
        .text
          font-size 12px
</style>
