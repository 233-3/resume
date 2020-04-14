<template>
  <div class="skill-box">
    <common-title :desc="desc" :en="en" :isActive="isActive"></common-title>
    <div class="skill-list" ref="anime" @click="tap">
      <div class="item hvr-shadow" v-for="(item, index) in skill.web"
                        :key="index"
                        :class="{animated: isActive, fadeInLeftBig: isActive}">
          {{item}}
      </div>
    </div>
    <div class="desc-list">
      <p  v-for="(list, index) in skill.descList"
          :key="index"
          :class="{animated: isActive, fadeInUpBig: isActive}">
          {{list}}
      </p>
    </div>
  </div>
</template>

<script>
import commonTitle from 'common/commonTitle'
export default {
  name: 'Skill',
  props: {
    acIndex: Number,
    skill: Object
  },
  data () {
    return {
      desc: '技能概况',
      en: 'Skill profile',
      isActive: false
    }
  },
  watch: {
    acIndex () {
      if (this.acIndex === 2) {
        this.isActive = true
      }
    }
  },
  methods: {
    play () {
      // var animes = this.$refs.anime
      var anime = this.$anime
      anime({
        targets: '.item'
        // scale: 1.5,
        // loop: true,
        // easing: 'easeInOutExpo'
      })
    },
    tap () {
      this.play()
      console.log('yo')
    }
  },
  components: {
    commonTitle
  }
}
</script>

<style lang="stylus" scoped>
@import url('../../assets/css/hover.css');
.skill-box
  display flex
  flex-direction column
  align-items center
  .skill-list
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content space-around
    font-family 'HyliaSerifBeta'
  .item
    margin 20px 12px
    font-size 18px
    @media screen and (max-width:320px)
      font-size 14px
      margin 10px 8px
    @media screen and (max-width:375px)
      font-size 14px
      margin 10px 8px
  .desc-list
    font-family 'Arial, Helvetica, sans-serif'
    padding 0 8px
    line-height 24px
    font-size 12px
    font-weight bold
    margin-top: 25px;
    @media screen and (max-width:320px)
      margin-top 18px
</style>
