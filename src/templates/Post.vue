<template>
  <Layout>
    <div class="blog-content">
      <h2 class="blog-title">{{$page.post.title}}</h2>
      <div class="content" v-html="$page.post.content" />
    </div>
    <div class="blog-footer">
      <div class="blog-reward">
        
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
};
</script>

<style lang="stylus" scoped>
/deep/ .blog-content {
  // markdown 文件样式
  /* 标题 h1~h2*/
  /* ====================================================*/
  h1 {
    font-size 2.8em
    color #d33682
    margin 0.75em 0
  }
  h2 {
    font-size 2.4em
    color #9B31EA
    margin 0.75em 0
  }
  h3 {
    font-size 1.8em
    color #338000
    margin 0.75em 0
  }
  h4 {
    font-size 1.4em
    margin 0.75em 0
  }

  /* p,a,,hr,list,table*/

  /* ==================================================*/
  /*<blockquote> 标签定义摘自另一个源的块引用。浏览器
  通常会对 <blockquote> 元素进行缩进。
  */
  blockquote {
      font-style italic
      border-left 5px solid
      padding-left 1em
  }

  /* p*/
  p {
      margin-bottom 1.5em
  }
  /* hr */
  hr {
      clear both
      margin 15px 0
      height 0px
      overflow hidden
      border none
      background transparent
      border-bottom 4px solid #ddd
      padding 0
  }
  /*  link*/

  a {
      color #b58900
      text-decoration none
  }
  afocus {
      outline thin dotted
  }
  aactive,ahover {
      outline 0
  }
  ahover {
      color #cb4b16
      text-decoration underline
  }
  avisited {
      color #cb4b16
  }

  /* list */

  ul,
  ol {
      margin 0 0 1.5em 1.5em
  }
  ol li {
      list-style-type decimal
      list-style-position outside
  }
  ul li {
      list-style-type disc
      list-style-position outside
  }

  /* code */
  code {
    background-color #F3F3F3
  }

  /* pre */
  pre {
    padding .5rem
    background-color #F3F3F3
    color #DD264F
  }
}

.blog-content {
  width $mainWidth
  margin 0 auto

  .blog-title {
    text-align center  
  }
}
</style>
