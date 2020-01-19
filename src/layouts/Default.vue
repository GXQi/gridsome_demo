<template>
  <div class="layout">
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
    <slot/>
    <!-- <footer class="footer">
      copy
    </footer> -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="stylus">
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

.layout {
  /* max-width: 760px;
  margin: 0 auto; */
  margin-left: 4rem;
  margin-right: 4rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 2rem;
    
    .title {
      position: relative;
      text-decoration: none;
      color: #000;
      padding: .2rem .4rem;
      font-size: .48rem;
      font-weight: bold;
      background-image: url('../assets/images/logo_bg.jpg');
      background-repeat: no-repeat;
      background-size: 130%;
      background-position: 70%;

      &::before {
        position: absolute;
        display: block;
        content: "";
        right : 0;
        top: 0; 
        width: 20%;
        height: 0.04rem;
        background: #000;
        transition: all .4s;
      }
      
      &::after {
        position: absolute;
        display: block;
        content: "";
        left  : 0;
        bottom: 0; 
        width: 20%;
        height: 0.04rem;
        background: #000;
        transition: all .4s;
      }

      &:hover::before,
      &:hover::after {
        width: 100%;
      }
    }

    .nav {
      display: flex;

      .nav__link {
        position: relative;
        display: block;
        padding: 0 0.2rem;
        margin: 0 0.2rem
        text-decoration: none;
        color: #000;
        text-align: center;

        .nav-icon {
          display: block;
          margin-bottom: 0.1rem;
        }

        &::after {
          position: absolute;
          display: block;
          content: "";
          left: 50%;
          bottom: -0.06rem; 
          transform: translateX(-50%);
          width: 0;
          height: 0.02rem;
          background: #000;
          transition: all .4s;
        }
        &:hover::after {
          width: 100%;
        }
        &.active--exact::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
