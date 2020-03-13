<template>
  <Layout>
    <h1># {{$page.tag.title}}</h1>
    <List :listData="$page.tag.belongsTo"></List>
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