<template>
  <section>
    <h1 class="header">{{ blog.attributes.title }}</h1>
    <Meta :blog="blog" />

    <div class="content" v-html="blog.html" />

    <Tags 
      v-if="tags" 
      :blog="blog" 
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ArticleData } from "~/types";
import Meta from "~/components/article/atoms/Meta.vue";
import Tags from "~/components/article/atoms/Tags.vue";

@Component({
  components: {
    Meta,
    Tags
  }
})
export default class ArticleView extends Vue {
  @Prop() blog!: ArticleData;

  get tags() {
    return !!(this.blog.attributes.tags && this.blog.attributes.tags.length);
  }
}
</script>

<style scoped>
</style>
