<template>
  <div id="Slidebar">
    <!-- 点击按钮 显示关闭侧滑菜单 -->
    <div class="slidebar-button" @click="clickBtn()">
      <div class="slidebar-line-wrap slidebar-line-close" :class="{slidebarBtnClose: isBtnClose}">
        <span class="slidebar-line slidebar-line-first"></span>
        <span class="slidebar-line slidebar-line-second"></span>
        <span class="slidebar-line slidebar-line-three"></span>
      </div> 
    </div>
    <!-- 侧滑菜单容器 -->
    <div class="slidebar-wrap-temp" :class="{active: isActive, close: isClose}"></div>
    <div class="slidebar-wrap" :class="{active: isActive, close: isClose}">
      <!-- 可写为插槽形式，在调用该组件的地方定义容器中的具体内容，此处直接写为固定形式-->
      <slot class="slidebar-main"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slidebar",
  data () {
    return {
      isActive: false,
      isClose: false,
      isBtnClose: false
    }
  },
  methods: {
    clickBtn () {
      this.isActive = !this.isActive
      this.isClose = !this.isActive
      this.isBtnClose = !this.isBtnClose
    }
  }
}
</script>

<style scoped lang="stylus">
#Slidebar {
  .slidebar-button {
    position: fixed
    bottom 1rem
    right .8rem
    width .28rem
    height .28rem
    background #222
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
        background #fff;
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

    &:hover {
      .slidebar-line-first {
        width 50%
        transform rotate(-45deg)
        top .06rem
      }
      .slidebar-line-three {
        width 50%
        transform rotate(45deg)
        bottom .06rem
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

  .slidebar-wrap {
    position fixed
    top 0
    right 0
    width $slidebarWidth
    height 100%
    background $slidebarBg
    margin-right -($slidebarWidth)
    color #fff
    padding 1rem
    box-sizing border-box
  }
  .slidebar-wrap-temp {
    width $slidebarWidth
    height 100%
    background $slidebarBg
    margin-right -($slidebarWidth)
    color #fff
  }
  // slidebar 开
  .active {
    animation opendoor .6s normal forwards
  }
  @keyframes opendoor {
    from {
      margin-right -($slidebarWidth)
    }
    to {
      margin-right 0
    }
  }
  // slidebar 关
  .close {
    animation close 0.6s normal forwards
  }
  @keyframes close {
    0% {
      margin-right 0
    }
    100% {
      margin-right -($slidebarWidth)
    }
  }
}

@media screen and (max-width: 1024px) {
  #Slidebar {
    display none
  }
}
</style>
