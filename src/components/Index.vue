<template>
  <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions" >
    <swiper-slide>
      <Home @change="next" @worksTap="worksOnTap" :acIndex="acIndex"></Home>
    </swiper-slide>
    <swiper-slide>
      <aboutMe :acIndex="acIndex"></aboutMe>
    </swiper-slide>
    <swiper-slide>
      <Skill :acIndex="acIndex" :skill="skill"></Skill>
    </swiper-slide>
    <swiper-slide>
      <Works :acIndex="acIndex" :works="works"></Works>
    </swiper-slide>
    <swiper-slide>
      <Experience :acIndex="acIndex" :experiences="experiences"></Experience>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import Home from './home/Home'
import aboutMe from './aboutMe/aboutMe'
import Skill from './skill/Skill'
import Works from './works/Works'
import Experience from './experience/Experience'
import axios from 'axios'
export default {
  name: 'Index',
  data () {
    return {
      swiperOptions: {
        direction: 'vertical',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChange: () => {
            this.acIndex = this.$refs.mySwiper.$swiper.snapIndex
          }
        }
      },
      acIndex: 0,
      skill: {},
      works: {},
      experiences: {}
    }
  },
  created () {
    this.getDateInfo()
  },
  methods: {
    next (msg) {
      this.$refs.mySwiper.$swiper.slideTo(1, 1000)
    },
    worksOnTap () {
      this.$refs.mySwiper.$swiper.slideTo(3, 1000)
    },
    getDateInfo () {
      axios.get('api/data.json').then((res) => {
        let data = res.data
        if (data.error === 0) {
          this.skill = data.skill
          this.works = data.works
          this.experiences = data.experiences
        }
      })
    }
  },
  components: {
    Home,
    aboutMe,
    Skill,
    Works,
    Experience
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.swiper-box >>> .swiper-pagination-bullet-active
  background: #424242
  >>>.swiper-slide
    overflow hidden
.swiper-box
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background #fff
</style>
