<template>
  <div id="List">
    <div 
      v-for="edge in listData.edges" 
      :key="edge.node.id"
      class="list-item"
    >
      <div class="list-title-wrap">
        <g-link class="list-title" :to="edge.node.path">{{edge.node.title}}</g-link>
        <g-link class="list-link" :to="edge.node.path">阅读更多 >>></g-link>
      </div>
      <!-- <g-image :src="edge.node.cover_image" /> -->
      <div class="list-meta">
        <p class="list-date"><span class="dateicon iconfont">&#xe672;</span><span class="mata-date-desc">发表于：</span><span class="mate-date">{{edge.node.date}}</span></p>
        <p class="list-classify"><span class="classifyicon iconfont">&#xe67b;</span><span class="mata-classify-desc">分类于：</span>
          <g-link class="mate-classify" :to="tag.path" v-for="tag in edge.node.tags" :key="tag.id">{{tag.id}} </g-link>
        </p>
      </div>
      <p class="list-desc">{{edge.node.excerpt}}</p>
    </div>

    <!-- <div class="paginate">{{listData.pageInfo.totalPages}}
      <span v-for="(page, index) in listData.pageInfo.totalPages" key="index">
        {{index + 1}}
      </span>
    </div> -->
    <Pager :info="listData.pageInfo" linkClass="pager" class="paginate-style"></Pager>
  </div>
</template>

<script>
import {Pager} from 'gridsome'
export default {
  name: "List",
  props: ['listData'],
  components: {
    Pager
  }
}
</script>

<style scoped lang="stylus">
#List {
  box-sizing border-box
}
.list-item {
  margin-top .4rem
  padding .4rem
  box-shadow 0 0 5px 0 rgba(38,42,48,0.1)

  .list-title-wrap {
    display flex
    justify-content space-between
    align-items center
    .list-title {
      font-size .48rem
      color $mainFontColor
      transition all .3s

      &:hover {
        text-shadow 2px 2px 2px #59575770
      }
    }
    .list-link {
      color #222
    }
  }

  .list-meta {
    display flex
    line-height 1
    font-size .24rem
    color $mateFontColor
    margin .2rem 0

    .list-date {
      padding-right .4rem
      border-right 1px solid #999

      span {
        vertical-align middle
      }

      .dateicon {
        margin-right .1rem
      }
    }

    .list-classify {
      padding-left .4rem

      span {
        vertical-align middle
      }

      .classifyicon {
        margin-right .1rem
      }
    }
  }

  .list-desc {
    // padding-bottom .3rem
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
  font-size .28rem
  padding 0
  text-align center
  &.active {
    background-color #409EFF
    color #fff
  }
}

.paginate-style {
  text-align center  
  padding-top .8rem
}
</style>
