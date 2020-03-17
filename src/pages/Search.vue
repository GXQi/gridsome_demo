<template>
  <Layout>
    <div class="search-content">
      <input type="text" name="search" id="search" class="input-search" placeholder="输入关键字搜索...">
      <div class="result-list">
        <List :listData="$page.posts"></List>
      </div>
    </div>
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
      }
    }
  }
}
</page-query>

<script>
import List from '~/components/List'
export default {
  metaInfo: {
    title: '搜索'
  },
  data () {
    return {

    }
  },
  components: {
    List
  },
  methods: {
    filterData (input) {
      input = new RegExp(input, 'i'); //忽略大小写
      var edges = this.$page.posts.edges;
      var indexItem
      for(var i = 0; i < edges.length; i++) {
        console.log(edges[i].node.title)
        // if(edges[i].node.title.indexOf(input) !== -1 || edges[i].node.content.indexOf(input) !== -1) {
        //   indexItem.push(i)
        //   console.log(indexItem)
        // }
      }
    }
  },
  mounted () {
    this.filterData('前端')
  }
}
</script>

<style lang="stylus" scoped>
.search-content {
  margin 0 .3rem
  .input-search {
    width calc(100% - .4rem)
    height .6rem
    border 1px solid #eee
    border-radius .1rem
    padding 0 .2rem
  }
}
</style>
