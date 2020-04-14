<template>
  <div class="title" :class="{animated: isActive, fadeInDown: isActive}">
      {{desc}}
      <br>
      <span>~{{en.toUpperCase()}}~</span>
    </div>
</template>

<script>
export default {
  name: 'commonTitle',
  props: {
    desc: {
      type: String,
      default () {
        return '关于我'
      }
    },
    en: {
      type: String,
      default () {
        return '~ABOUT ME~'
      }
    },
    isActive: Boolean
  }
}
</script>

<style  lang="stylus" scoped>
.title
    padding-top 50px
    text-align center
    font-size 18px
    @media screen and (max-width:320px)
      padding-top 10px
    @media screen and (max-width:375px)
      padding-top 20px
  .title span
    display inline-block
    padding 10px
    margin-top 10px
    border-top 1px solid #424242
</style>
