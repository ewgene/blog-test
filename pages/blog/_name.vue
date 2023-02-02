<template>
  <ArticleView :blog="blog" />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import { State } from "vuex-class";
import ContentHelper from "~/blog/ContentHelper";

import ArticleView from "~/components/article/ArticleView.vue";

@Component({
  components: {
    ArticleView
  },
  layout: "blog",

  async asyncData({ params, redirect, app }) {
    const blog = await new ContentHelper().getBlogBySlug(app.i18n.locale, params.name);
    if (!blog) {
      redirect("/");
      return;
    }
    return { blog };
  }
})
export default class BlogName extends Vue {}
</script>
