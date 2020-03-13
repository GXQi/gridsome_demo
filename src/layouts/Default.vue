<template>
  <div class="layout">
    <div class="layout-main">
      <header class="header">
        <strong>
          <g-link class="title" to="/">{{ $static.metadata.siteName }}</g-link>
          <!-- <g-link to="/">{{ $static.BlogPosts.title }}</g-link> -->
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/"><i class="nav-icon iconfont">&#xe65d;</i>首页</g-link>
          <g-link class="nav__link" to="/archives/"><i class="nav-icon iconfont">&#xe662;</i>分类/标签</g-link>
          <g-link class="nav__link" to="/about/"><i class="nav-icon iconfont">&#xe66a;</i>关于</g-link>
          <g-link class="nav__link" to="/search/"><i class="nav-icon iconfont">&#xe65f;</i>搜索</g-link>
        </nav>
      </header>
      <div class="slot-wrapper">
        <slot/>
      </div>
      <!-- <footer class="footer    ">
        copy
      </footer> -->
    </div>
    <slidebar></slidebar>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Slidebar from '~/components/Slidebar'
export default {
  components: {
    Slidebar
  }
}
</script>

<style lang="stylus" scoped>
.layout {
  display flex
  min-height 100%
  height auto

  .layout-main {
    flex 1
    .header {
      width $mainWidth
      margin 0 auto
      display flex
      justify-content space-between
      align-items center
      padding 1rem 0 2rem
      
      .title {
        position relative
        text-decoration none
        color $mainFontColor
        padding .2rem .4rem
        font-size .48rem
        font-weight bold
        background-repeat no-repeat
        background-size 130%
        background-position 70%

        &::before {
          position absolute
          display block
          content ""
          right 0
          top 0
          width 20%
          height 0.04rem
          background $mainFontColor
          transition all .4s
        }
        
        &::after {
          position absolute
          display block
          content ""
          left 0
          bottom 0
          width 20%
          height 0.04rem
          background $mainFontColor
          transition all .4s
        }

        &:hover::before,
        &:hover::after {
          width 100%
        }
      }

      .nav {
        display flex

        .nav__link {
          position relative
          display block
          padding 0 0.2rem
          margin 0 0.2rem
          text-decoration none
          color $mainFontColor
          text-align center

          .nav-icon {
            display block
            margin-bottom 0.1rem
          }

          &::after {
            position absolute
            display block
            content ""
            left 50%
            bottom -0.06rem
            transform translateX(-50%)
            width 0
            height 0.02rem
            background $mainFontColor
            transition all .4s
          }
          &:hover::after {
            width 100%
          }
          &.active--exact {
            font-weight bold
          }
          &.active--exact::after {
            width 100%
          }
        }
      }
    }
    
    .slot-wrapper {
      width $mainWidth
      margin 0 auto
    }
  }
}
</style>
