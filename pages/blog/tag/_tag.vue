<template>
  <section>
    <h1 class="header">Tag</h1>

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
  layout: "blog",
  
  async asyncData({ params, app }) {
    const blogs = await new ContentHelper().getBlogsByTag(app.i18n.locale,
      params.tag,
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
