<template>
  <Layout>
    <div class="tag-content">
      <h1 class="tag-title"># {{$page.tag.title}}</h1>
      <List :listData="$page.tag.belongsTo"></List>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!, $page: Int) {
	tag (id: $id) {
    title
    belongsTo (perPage: 2, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
            id
            title
            excerpt
            date (format: "D-MM-YYYY")
            path
            tags {
              id
              path
            }
            cover_image (width: 100, height: 100, quality: 100)
          }
        }
      }
    }
  }
}
</page-query>

<script>
import List from '~/components/List'
export default {
  components: {
    List
  }
}
</script>

<style lang="stylus" scoped>
.tag-content {
  width 100%
  max-width $mainWidth_max
  min-width $mainWidth_min
  margin .6rem auto
  padding 0 .3rem
  box-sizing border-box

  .tag-title {
    text-align center
    font-size .72rem
  }
}
</style>