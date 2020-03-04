<template>
  <Layout :showFooter="true">
    <List :listData="$page.posts.edges"></List>
    <!-- <Footer></Footer> -->
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
import Footer from '~/components/Footer'
export default {
  metaInfo: {
    title: '首页'
  },
  components: {
    List,
    Footer
  }
}
</script>

<style lang="stylus">
</style>
