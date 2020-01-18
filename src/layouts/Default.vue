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
  src: url('//at.alicdn.com/t/font_1618118_5vz445ymv5f.eot');
  src: url('//at.alicdn.com/t/font_1618118_5vz445ymv5f.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1618118_5vz445ymv5f.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1618118_5vz445ymv5f.woff') format('woff'),
  url('//at.alicdn.com/t/font_1618118_5vz445ymv5f.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1618118_5vz445ymv5f.svg#iconfont') format('svg');
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
  padding-left: 4rem;
  padding-right: 4rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .4rem;
    padding: 1rem 0 .4rem;
    
    .title {
      text-decoration: none;
      background-color: #000;
      color: #fff;
      padding: .16rem .8rem;
      font-size: .48rem;
    }

    .nav {
      display: flex;

      .nav__link {
        position: relative;
        display: block;
        padding: 0 0.4rem;
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
      }
    }
  }
}
</style>
