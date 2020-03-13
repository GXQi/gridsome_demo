<template>
  <div id="List">
    <div 
      v-for="edge in listData.edges" 
      :key="edge.node.id"
      class="list-item"
    >
      <a :href="edge.node.path" class="list-title">{{edge.node.title}}</a>
      <g-image :src="edge.node.cover_image" />
      <div class="list-meta">
        <p class="list-date"><span class="dateicon iconfont">&#xe672;</span><span class="mata-date-desc">发表于：</span><span class="mate-date">{{edge.node.date}}</span></p>
        <p class="list-classify"><span class="classifyicon iconfont">&#xe67b;</span><span class="mata-classify-desc">分类于：</span>
          <g-link class="mate-classify" :to="tag.path" v-for="tag in edge.node.tags" :key="tag.id">{{tag.id}} </g-link>
        </p>
      </div>
      <p class="list-desc">{{edge.node.excerpt}}</p>
      <g-link class="list-link" :to="edge.node.path">阅读更多</g-link>
    </div>

    <!-- <div class="paginate">{{listData.pageInfo.totalPages}}
      <span v-for="(page, index) in listData.pageInfo.totalPages" key="index">
        {{index + 1}}
      </span>
    </div> -->
    <Pager :info="listData.pageInfo" linkClass="pager"></Pager>
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
  width auto
  margin 0 auto
}
.pager {
  font-size .4rem
  letter-spacing .2rem
  padding .2rem
}
.list-item {
  margin-bottom .8rem

  .list-title {
    font-size .4rem
    color $mainFontColor
    transition all .3s

    &:hover {
      text-shadow 2px 2px 2px #59575770
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
    padding-bottom .3rem
  }

  .list-link {
    padding .12rem .6rem
    background #000
    color #fff
    font-size .24rem
    transition all .3s
    border 1px solid #000

    &:hover {
      background transparent
      color #000
    }
  }
}
</style>
