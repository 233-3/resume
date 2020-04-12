<template>
  <div class="home">
    <div class="svg-one">
      <img src="./Squid_icon_(Splatoon).svg" :class="{animated: isActive, rotateIn: isActive}">
    </div>
    <p class="title" :class="{animated: isActive, fadeInDown: isActive}">HELLO IM QK</p>
    <div class="btn-wrapper">
      <p class="btn hvr-bounce-to-top " @click="aboutme" :class="{animated: isActive, fadeInLeft: isActive}">关于我</p>
      <p class="btn hvr-sweep-to-left" @click="works" :class="{animated: isActive, fadeInRight: isActive}">作品集</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    acIndex: Number
  },
  data () {
    return {
      msg: false,
      isActive: false
    }
  },
  created () {
    this.isActive = true
  },
  methods: {
    aboutme () {
      this.$emit('change', this.msg)
    },
    works () {
      this.$emit('worksTap')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import url('../../assets/css/hover.css');
  >>>.hvr-bounce-to-top:before
    background: #000;
  >>>.hvr-sweep-to-left:before
    background: #fff;
  .home
    display flex
    flex-direction column
    align-items center
    font-size 25px
    font-family:'PaintballBeta'
    .svg-one
      margin-top 150px
    .title
      font-size 35px
      animation-delay .5s
    .btn-wrapper
      display flex
      flex-direction row
      justify-content space-around
      animation-delay 1s
      .btn
        padding 5px 10px
        border 1px solid #424242
        border-radius 5px
        transition all .5s
        margin 10px 15px
        overflow hidden
      .btn:last-child
        background #000;
        color #fff
        &:hover
          color #000
</style>
