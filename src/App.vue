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
  src: url('//at.alicdn.com/t/font_1618118_4ydw1c62s1k.eot');
  src: url('//at.alicdn.com/t/font_1618118_4ydw1c62s1k.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1618118_4ydw1c62s1k.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1618118_4ydw1c62s1k.woff') format('woff'),
  url('//at.alicdn.com/t/font_1618118_4ydw1c62s1k.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1618118_4ydw1c62s1k.svg#iconfont') format('svg');
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
  min-height 100%
  // background url($bgImg)
  // background-size cover
  // background-repeat no-repeat
  // background-position center
  background-attachment fixed
}
</style>