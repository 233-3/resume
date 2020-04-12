<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'HyliaSerifBeta';
  src: url(./assets/fonts/HyliaSerifBeta-Regular.otf);
}
@font-face {
  font-family: 'PaintballBeta';
  src: url(./assets/fonts/Paintball_Beta.ttf);
}
#app
  font-family:'PaintballBeta', 'HyliaSerifBeta', Arial, Helvetica, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  background #f2f2f2
</style>
