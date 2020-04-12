<template>
  <div class="aboutMe">
    <common-title :desc="desc" :en="en" :isActive="isActive"></common-title>
    <ul class="list">
      <li :class="{animated: isActive, fadeInLeft: isActive}">
        <div class="box">
          <i class="iconfont icon-nianling"></i>
        </div>
        <p>年龄 / 23</p>
      </li>
      <li :class="{animated: isActive, fadeInRight: isActive}">
        <div class="box">
          <i class="iconfont icon-xiazai19"></i>
        </div>
        <p>学历 / 大专</p>
      </li>
      <li :class="{animated: isActive, fadeInLeft: isActive}">
        <div class="box">
          <i class="iconfont icon-xuelishuiping"></i>
        </div>
        <p>坐标 / 郑州</p>
      </li>
      <li :class="{animated: isActive, fadeInRight: isActive}">
        <div class="box">
          <i class="iconfont icon-zhuangtai"></i>
        </div>
        <p>状态 / 离职</p>
      </li>
      <li :class="{animated: isActive, fadeInLeft: isActive}">
        <div class="box">
          <i class="iconfont icon-weixin"></i>
        </div>
        <p>kqk1997</p>
      </li>
      <li :class="{animated: isActive, fadeInRight: isActive}">
        <div class="box">
          <i class="iconfont icon-weibiaoti-"></i>
        </div>
        <p>17637870520</p>
      </li>
    </ul>
  </div>
</template>

<script>
import commonTitle from 'common/commonTitle'
export default {
  name: 'aboutMe',
  props: {
    acIndex: Number
  },
  data () {
    return {
      desc: '关于我',
      en: 'ABOUT ME',
      isActive: false
    }
  },
  watch: {
    acIndex () {
      if (this.acIndex === 1) {
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
.aboutMe
  display flex
  flex-direction column
  align-items center
  .list
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content space-around
    padding-left 0
    margin-top 50px
    list-style none
    li
      width 40%
      text-align center
      .box:hover
        // transform scale(1.2)
        // transition all .6s
      .box
        width 100px
        height 100px
        border 1px solid #2c3e50
        border-radius 50%
        margin 0 auto
        i
          display block
          margin-top 26px
          font-size 45px
          text-align center
</style>
