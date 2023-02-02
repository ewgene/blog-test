<template>
  <section>
    <h1 class="header">Authors</h1>
    {{ authors }}
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

  async asyncData(ctx) {
    const authors = await new ContentHelper().getAuthors("fr");
    return { authors };
  }
})
export default class extends Vue {
  authors?: string[];
}
</script>
