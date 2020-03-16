<template>
  <Layout :showFooter="true">
    <!-- <List :listData="$page.posts"></List> -->
    <div class="index-list">
      <div class="article-card" v-for="edge in $page.posts.edges" :key="edge.node.id">
          <div class="article-cover">
            <g-image class="article-cover-image" :src="edge.node.cover_image" />
            <g-link class="article-title" :to="edge.node.path">{{edge.node.title}}</g-link>
          </div>
          <div class="article-info">
            <div class="article-info-tag">
              <p class="article-date"><span class="dateicon iconfont">&#xe672;</span><span class="mata-date-desc">发表于：</span><span class="mate-date">{{edge.node.date}}&nbsp;•&nbsp;</span></p>
              <p class="list-classify"><span class="classifyicon iconfont">&#xe67b;</span><span class="mata-classify-desc">分类于：</span>
                <g-link class="mate-classify" :to="tag.path" v-for="tag in edge.node.tags" :key="tag.id">{{tag.id}} </g-link>
              </p>
            </div>
            <div class="article-sub-desc">{{edge.node.excerpt}}</div>
            <hr>
            <g-link class="read-more" :to="edge.node.path">阅读更多</g-link>
          </div>
      </div>
      <Pager :info="$page.posts.pageInfo" linkClass="pager" class="paginate-style"></Pager>
    </div>
    <!-- <Footer></Footer> -->
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        date (format: "YYYY-MM-DD")
        path
        tags {
          id
          path
        }
        cover_image (width: 1000, height: 300, quality: 100)
      }
    }
  }
}
</page-query>

<script>
import {Pager} from 'gridsome'
import Footer from '~/components/Footer'
export default {
  metaInfo: {
    title: '首页'
  },
  components: {
    Pager,
    Footer
  }
}
</script>

<style lang="stylus">
.index-list {
  width 100%
  max-width $mainWidth_max  
  margin .6rem auto
  
  .article-card {
    padding .4rem
    box-shadow: 0 0 5px 0 rgba(38, 42, 48, .1);
    margin-bottom .4rem
    margin-left .3rem
    margin-right .3rem

    .article-cover {
      position relative
      .article-cover-image {
        width 100%  
      }
      &::before {
        position absolute
        display block
        content ""
        right 0
        top 0
        width 100%
        height 100%
        background rgba(0,0,0,.3)
      }
      .article-title {
        position absolute
        width auto
        top 50%
        left 50%
        text-align center
        color #fff
        transform translate(-50%, -50%)
        font-size .72rem
        cursor pointer
        line-height 1.2
        
        &::after {
          position absolute
          display block
          content ""
          left 50%
          bottom 0
          transform translateX(-50%)
          width 0
          height 0.04rem
          background #fff
          transition all .4s
        }

        &:hover::after {
          width 100%
        }
      }
    }

    .article-info {
      .article-info-tag {
        display flex
        letter-spacing .01rem
        justify-content center
        margin .4rem 0
        span {
          vertical-align middle
        }
      }

      .article-sub-desc {
        border-left .06rem solid #666
        padding-left .2rem
        margin-bottom .4rem
        color #666
      }

      hr {
        border-top .02rem solid #eee
      }

      .read-more {
        display block
        width 3rem
        padding .1rem 0
        background #222
        color #fff
        font-size .24rem
        transition all .3s
        border 1px solid #222
        margin 0 auto
        margin-top .4rem
        text-align center
        font-weight bold

        &:hover {
          background transparent
          color #222
        }
      }
    }
  }

  .pager {
    display inline-block
    margin 0 .1rem
    line-height .6rem
    width .6rem
    height .6rem
    background-color #f4f4f5
    color #606266
    font-weight bold
    &.active {
      background-color #409EFF
      color #fff
    }
  }

  .paginate-style {
    text-align center  
    padding-top .4rem
  }
}
</style>
