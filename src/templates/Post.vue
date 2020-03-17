<template>
  <Layout>
    <div class="article-content">
      <div class="blog-content">
        <h2 class="blog-title">{{$page.post.title}}</h2>
        <div class="content" v-html="$page.post.content" />
        <span :id="this.$page.post.title.replace(' ', '-')" class="leancloud_visitors" :data-flag-title="$page.post.title">
          <em class="post-meta-item-text">阅读量 </em>
          <i class="leancloud-visitors-count"></i>
        </span>
        <!-- <p>{{$page.post.belongsTo.edges.next.id}}</p> -->
      </div>
      <div class="money-wrap">
        <p>如果我的文章对您有帮助！有钱的捧个钱场，没钱的捧个人场，谢谢您！</p>
        <div class="money-btn" @click="showQrcode = !showQrcode">赞赏</div>
        <div class="qrcode-wrap" v-show="showQrcode">
          <g-image class="qrcode" src="../assets/images/qrcode_wechat.jpg" width="200" height="200"></g-image>
          <g-image class="qrcode" src="../assets/images/qrcode_zhifubao.jpg" width="200" height="200"></g-image>
        </div>
      </div>
      <div class="vcomment">
        <h5 class="vcomment-title">评论区</h5>
        <div id="vcomments">
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>

<script>
// import Valine from 'valine';
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  data () {
    return {
      showQrcode: false
    }
  },
  methods: {
    createValine() {
      const Valine = require('valine');
      window.AV = require('leancloud-storage')
      const valine =  new Valine({
        el: '#vcomments',
        appId: 'kP97LTb0QzXpciqqDg0nJIBL-gzGzoHsz',
        appKey: 'BMOIHz4swWCApfOU0g0vC1OK',
        notify: false,
        verify: true,
        avatar: 'robohash', //头像展示方式
        path: window.location.pathname,
        placeholder: '欢迎留言与我分享您的想法...',
        meta: ['nick','mail'],
        pageSize: 10,
        visitor: true //文章访问数
      });
      this.valineRefresh = false
    }
  },
  mounted () {
    this.createValine()
  }
};
</script>

<style lang="stylus" scoped>
>>> .vcomment {
  margin-top 1rem
  margin-left .3rem
  margin-right .3rem
  .vcomment-title {
    margin-bottom 1rem
    font-size .46rem
    border-left .08rem solid #222
    padding-left .4rem
  }
  .v .vwrap {
    border .04rem solid #222
  }
  .v .vwrap .vheader.item2 .vinput {
    width 46%
    border-bottom 1px dashed #222
    line-height 1
    padding .1rem 0
    margin 0 2%
  }
  .v .vwrap .vheader .vinput:focus {
    border-bottom 1px dashed #cb5055
  }
  .v .veditor {
    width 96%
    min-height 1rem
    margin 0 2%
    padding 0
    box-sizing border-box
  }
  .v .vwrap .vedit .vctrl {
    margin 0 2%
  }
  .v .vwrap .vcontrol {
    margin 0 2%
    padding-top 0
  }
  .v .vbtn {
    padding .1rem .6rem
    background #222
    color #fff
  }
  .v .vbtn:active, .v .vbtn:hover {
    border 1px solid #222
    background-color #fff
    color #222
  }
  .v .vlist .vcard .vh {
    border-bottom 1px dashed #222
  }
  .v .vlist .vcard:last-child .vh {
    border-bottom none
  }
  .v .vlist .vcard .vquote {
    border-left 1px dashed #ccc
  }
  .v .vlist .vcard .vhead,
  .v .vlist .vcard .vh .vmeta {
    display inline-block
  }
  .v .vlist .vcard .vh .vmeta {
    float right
  }
  .v .vlist .vcard .vh .vmeta .vat {
    display inline-block
    background-color #222
    padding 0 .2rem
    color #fff
    border-radius .3em
    border 1px solid #fff
    box-sizing border-box
  }
  .v .vlist .vcard .vh .vmeta .vat:active,
  .v .vlist .vcard .vh .vmeta .vat:hover {
    color #222
    background-color #fff
    border 1px solid #222
  }
  .v .txt-right {
    display none
  }
}
/deep/ .blog-content {
  // markdown 文件样式
  /* 标题 h1~h2*/
  /* ====================================================*/
  h1 {
    font-size 2.8em
    color #d33682
    margin 0.75em 0
  }
  h2 {
    font-size 2.4em
    color #9B31EA
    margin 0.75em 0
  }
  h3 {
    font-size 1.8em
    color #338000
    margin 0.75em 0
  }
  h4 {
    font-size 1.4em
    margin 0.75em 0
  }

  /* p,a,,hr,list,table*/

  /* ==================================================*/
  /*<blockquote> 标签定义摘自另一个源的块引用。浏览器
  通常会对 <blockquote> 元素进行缩进。
  */
  blockquote {
      font-style italic
      border-left 5px solid
      padding-left 1em
  }

  /* p*/
  p {
      margin-bottom 1.5em
  }
  /* hr */
  hr {
      clear both
      margin 15px 0
      height 0px
      overflow hidden
      border none
      background transparent
      border-bottom 4px solid #ddd
      padding 0
  }
  /*  link*/

  a {
      color #b58900
      text-decoration none
  }
  afocus {
      outline thin dotted
  }
  aactive,ahover {
      outline 0
  }
  ahover {
      color #cb4b16
      text-decoration underline
  }
  avisited {
      color #cb4b16
  }

  /* list */

  ul,
  ol {
      margin 0 0 1.5em 1.5em
  }
  ol li {
      list-style-type decimal
      list-style-position outside
  }
  ul li {
      list-style-type disc
      list-style-position outside
  }

  /* code */
  code {
    background-color #F3F3F3
  }

  /* pre */
  pre {
    padding .5rem
    background-color #F3F3F3
    color #DD264F
  }
  .img1 {
    display block
  }
}

.article-content {
  width 100%
  max-width $mainWidth_max
  min-width $mainWidth_min
  margin auto
  .blog-content {
    padding-bottom 1rem
    margin-left .3rem
    margin-right .3rem
    .blog-title {
      text-align center  
    }
  }
  .money-wrap {
    user-select none
    padding-bottom 1rem
    border-bottom 1px solid #ccc
    margin-left .3rem
    margin-right .3rem

    p {
      text-align center
      margin-bottom .5rem
    }
    .money-btn {
      width 2rem
      padding .1rem 0
      background-color #222
      color #fff
      text-align center
      margin 0 auto
      border 1px solid #222
      border-radius .1rem
      cursor pointer

      &:active,
      &:hover {
        color #222
        background-color #fff
        border 1px solid #222
      }
    }
    .qrcode-wrap {
      display flex
      justify-content center
      margin-top .5rem

      .qrcode {
        margin 0 .4rem
      }

      @media screen and (max-width: 768px) {
        .qrcode {
          width 2.2rem
          margin 0 .2rem
        }
      }
    }
  }
}
</style>
