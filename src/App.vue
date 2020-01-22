<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
/*字体图标*/
@font-face {
  font-family: 'iconfont';  /* project id 1618118 */
  src: url('//at.alicdn.com/t/font_1618118_2wyxq1au3l.eot');
  src: url('//at.alicdn.com/t/font_1618118_2wyxq1au3l.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1618118_2wyxq1au3l.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1618118_2wyxq1au3l.woff') format('woff'),
  url('//at.alicdn.com/t/font_1618118_2wyxq1au3l.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1618118_2wyxq1au3l.svg#iconfont') format('svg');
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:18px;
  height:20px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  background url('assets/images/bg2.jpg')
  background-size cover
  background-repeat no-repeat
  background-position center
  background-attachment fixed
}
</style>