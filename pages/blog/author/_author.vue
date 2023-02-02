<template>
  <section>
    <h1 class="header">Author</h1>

    <ArticleList :blogs="blogs" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ArticleRaw } from "~/types";

import ContentHelper from "~/blog/ContentHelper";

import ArticleList from "~/components/article/ArticleList.vue";

@Component({
  components: {
    ArticleList
  },
  async asyncData({ params, app }) {
    const blogs = await new ContentHelper().getBlogsByAuthor(
      app.i18n.locale,
      params.author,
      1,
      9
    );
    return { blogs };
  }
})
export default class BlogCategory extends Vue {
  blogs?: ArticleRaw[];
}
</script>
