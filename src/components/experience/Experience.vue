<template>
  <div class="experience">
      <common-title :desc="desc" :en="en" :isActive="isActive" ></common-title>
      <div class="block" :class="{animated: isActive, tdExpandIn: isActive}">
        <el-timeline>
           <el-timeline-item :timestamp="item.time" placement="top" v-for="(item, index) in experiences.experience" :key="index">
            <el-card>
              <h4>{{item.company}}</h4>
              <span>职位：{{item.position}}</span>
              <p>{{item.desc}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
  </div>
</template>

<script>
import commonTitle from 'common/commonTitle'
export default {
  name: 'Experience',
  props: {
    acIndex: Number,
    experiences: Object
  },
  data () {
    return {
      desc: '经历',
      en: 'experience',
      isActive: false
    }
  },
  watch: {
    acIndex () {
      if (this.acIndex === 4) {
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
  @import url('../../assets/css/tuesday.css');
  .block
    width 85%
    margin 0 auto
    font-family 'HyliaSerifBeta'
    animation-delay .5s
    .el-timeline
      padding-left 0
</style>
