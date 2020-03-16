<template>
  <div class="layout">
    <div class="layout-main">
      <header class="header">
        <div class="header-wrap">
          <strong>
            <g-link class="title" to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
          <nav class="nav">
            <g-link class="nav__link" to="/"><i class="nav-icon iconfont">&#xe65d;</i>首页</g-link>
            <g-link class="nav__link" to="/archives/"><i class="nav-icon iconfont">&#xe662;</i>分类/标签</g-link>
            <g-link class="nav__link" to="/about/"><i class="nav-icon iconfont">&#xe66a;</i>关于</g-link>
            <g-link class="nav__link" to="/search/"><i class="nav-icon iconfont">&#xe65f;</i>搜索</g-link>
          </nav>
        </div>
        <div class="m-header">
          <div class="m-header-wrap">
            <g-link class="m-title" to="/">{{ $static.metadata.siteName }}</g-link>
            <div class="m-menu-btn" @click="showMenu_m = !showMenu_m">
              <div class="slidebar-line-wrap slidebar-line-close">
                <span class="slidebar-line slidebar-line-first"></span>
                <span class="slidebar-line slidebar-line-second"></span>
                <span class="slidebar-line slidebar-line-three"></span>
              </div>
            </div>
          </div>
          <div class="m-menu-wrap" v-show="showMenu_m" :class="{activeMenu: isMenuActive, closeMenu: isMenuClose}">
            <g-link class="nav__link" to="/"><i class="nav-icon iconfont">&#xe65d;</i>首页</g-link>
            <g-link class="nav__link" to="/archives/"><i class="nav-icon iconfont">&#xe662;</i>分类/标签</g-link>
            <g-link class="nav__link" to="/about/"><i class="nav-icon iconfont">&#xe66a;</i>关于</g-link>
            <g-link class="nav__link" to="/search/"><i class="nav-icon iconfont">&#xe65f;</i>搜索</g-link>
          </div>
        </div>
      </header>
      <slot/>
      <!-- <Footer v-if="showFooter"></Footer> -->
      <Footer></Footer>
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
import Footer from '~/components/Footer'
import Slidebar from '~/components/Slidebar'
export default {
  data () {
    return  {
      showMenu_m: false,
      idMenuActive: false,
      idMenuClose: false
    }
  },
  // props: ['showFooter'],
  components: {
    Slidebar,
    Footer
  }
}
</script>

<style lang="stylus">
.layout {
  display flex
  min-height 100%
  height auto

  .layout-main {
    flex 1
    .header {
      background-color #f9f9f9;
      width 100%
      .m-header-wrap {
        display none
      }
      .header-wrap {
        width 100%
        max-width $mainWidth_max
        min-width $mainWidth_min
        margin 0 auto
        display flex
        justify-content space-between
        align-items center
        padding .8rem .3rem
        box-sizing border-box
        
        .title {
          position relative
          text-decoration none
          color $mainFontColor
          padding .2rem .4rem
          font-size .48rem
          font-weight bold
          // background-image url('../assets/images/logo_bg.jpg')
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
    }
    .slot-wrapper {
      max-width $mainWidth
      width 100%
      margin 0 auto
    }
  }
}

@media screen and (max-width: 768px) {
  // 移动端导航
  .layout {
    .layout-main {
      .header {
        .header-wrap {
          display none
        }
        .m-header {
          .m-header-wrap {
            display flex
            padding .4rem .3rem
            justify-content space-between
            align-items center

            .m-title {
              color #000
              font-size .4rem
              font-weight bold
            }
            .m-menu-btn {
              width .4rem
              height .4rem
              cursor pointer
              padding .1rem
              z-index 999

              .slidebar-line-wrap {
                position relative
                width 100%
                height 100%

                .slidebar-line {
                  position absolute
                  display block
                  width 100%;
                  height .04rem
                  background #222;
                  transition all .4s
                }
                .slidebar-line-first {
                  top 0
                }
                .slidebar-line-second {
                  top 50%
                  transform translateY(-50%)
                }
                .slidebar-line-three {
                  bottom 0
                }
              }

              .slidebar-line-wrap.slidebarBtnClose {
                .slidebar-line-second {
                  opacity 0
                }
                .slidebar-line-first {
                  top 50%
                  left .01rem
                  transform rotate(-45deg) translateY(-50%)
                }
                .slidebar-line-three {
                  top 50%
                  right .01rem
                  transform rotate(45deg) translateY(-50%)
                }
              }

              &:hover {
                .slidebarBtnClose {
                  .slidebar-line-first {
                    width 100%  
                  }
                  .slidebar-line-three {
                    width 100%  
                  }
                }
              }
            }
          }
          .m-menu-wrap {
            border-top 1px solid #ccc
            padding .4rem .3rem
            a {
              display block
              color #222
              font-size .36rem
              padding .2rem 0
              .iconfont {
                display inline-block
                margin-right .2rem
              }
            }
          }
        }
      }
    }
  }
}
</style>
