<template>
  <Layout>
    <List :listData="$page.posts.edges"></List>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        description
        date (format: "D-MM-YYYY")
        archives
        path
      }
    }
  }
}
</page-query>

<script>
import List from '~/components/List'
export default {
  metaInfo: {
    title: '首页'
  },
  components: {
    List
  }
}
</script>

<style lang="stylus">
</style>
