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
