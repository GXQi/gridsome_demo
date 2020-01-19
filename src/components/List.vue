<template>
  <div id="List">
    <div 
      v-for="edge in listData" 
      :key="edge.node.id"
      class="list-item"
    >
      <a :href="edge.node.path" class="list-title">{{edge.node.title}}</a>
      <div class="list-meta">
        <p class="list-date"><span class="dateicon iconfont">&#xe672;</span><span class="mata-date-desc">发表于：</span><span class="mate-date">{{edge.node.date}}</span></p>
        <p class="list-classify"><span class="classifyicon iconfont">&#xe67b;</span><span class="mata-classify-desc">分类于：</span><span class="mate-classify">{{edge.node.archives}}</span></p>
      </div>
      <p class="list-desc">{{edge.node.description}}</p>
      <a class="list-link" :href="edge.node.path">阅读更多</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ['listData'],
}
</script>

<style lang="stylus">
.list-item {
  margin-bottom: .8rem;

  .list-title {
    font-size: .4rem;
    color: #000;
  }

  .list-meta {
    display: flex;
    line-height: 1;
    font-size: .24rem
    color: #999;
    margin: .2rem 0;

    .list-date {
      padding-right: .4rem;
      border-right: 1px solid #999;

      span {
        vertical-align: middle;
      }

      .dateicon {
        margin-right: .1rem;
      }
    }

    .list-classify {
      padding-left: .4rem;

      span {
        vertical-align: middle;
      }

      .classifyicon {
        margin-right: .1rem;
      }
    }
  }

  .list-desc {
    padding-bottom: .3rem;
  }

  .list-link {
    padding: .12rem .6rem;
    background: #000;
    color: #fff;
    font-size: .24rem;
  }
}
</style>
