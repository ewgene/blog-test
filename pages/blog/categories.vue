<template>
  <section>
    <h1 class="header">categories</h1>
    {{ categories }}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import ContentHelper from "~/blog/ContentHelper";
import ArticleList from "~/components/article/ArticleList.vue";

@Component({
  components: {
    ArticleList
  },
  layout: "blog",
  async asyncData({ app }) {
    const categories = await new ContentHelper().getCategories(app.i18n.locale);
    return { categories };
  }
})
export default class extends Vue {
  categories?: string[];
}
</script>
