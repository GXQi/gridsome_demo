<template>
  <Layout>
    <div class="search-content">
      <input v-model="value" type="text" name="search" id="search" class="input-search" placeholder="输入关键字搜索..." @keyup.enter="filterData(value)">
      <div class="result-list">
        <List :listData="posts"></List>
      </div>
      <div class="no-data" v-show="!posts.edges.length">
        <g-image src="../assets/images/nodata.png"></g-image>
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allPost {
    edges {
      node {
        id
        title
        excerpt
        date (format: "YYYY-MM-DD")
        path
        content
        tags {
          id
          path
          title
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
      posts: {
        edges: []
      },
      value: ''
    }
  },
  components: {
    List
  },
  watch: {
    
 },
  methods: {
    // 查询范围包括文章标题、内容、标签
    filterData (input) {
      this.posts = {edges: []}
      input = new RegExp(input, 'i') //忽略大小写
      var edges = this.$page.posts.edges;
      var arrResults = []
      var tagsString = ''
      var tagsArr = []
      for(var i = 0; i < edges.length; i++) {
        for(var j = 0; j < edges[i].node.tags.length; j++) {
          tagsString += edges[i].node.tags[j].title
        }
        console.log(edges[i].node.content.replace(/<[^>]+>/g,"")) //去除标签
        // console.log(tagsString)
        // tagsArr = edges[i].node.tags
        if(edges[i].node.title.search(input) !== -1 || edges[i].node.content.search(input) !== -1 || tagsString.search(input) !== -1) {
          this.posts.edges.push(edges[i])
        } else {
        }
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.search-content {
  margin 0 .3rem
  box-sizing border-box
  .input-search {
    width calc(100% - .4rem)
    height .6rem
    border 1px solid #eee
    border-radius .1rem
    padding 0 .2rem
  }
  .no-data {
    width 100%
    margin-top .6rem 
    text-align center

    img {
      width 50%
    }
  }
}
</style>
