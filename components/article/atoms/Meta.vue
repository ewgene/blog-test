<template>
  <div class="bla">
    Posted on
    <span 
      v-for="(category, index) in blog.attributes.categories" 
      :key="category"
      >
      <span v-if="index">, </span>
      <nuxt-link :to="localePath({name: 'blog-category-category', params: { category }})">{{ category }}</nuxt-link>
    </span>

    • {{ blog.attributes.date | formatDate($i18n.locale, "LL") }}

    <span v-if="blog.attributes.author">
      • by
      <nuxt-link
        :to="{name: 'blog-author-author', params: { author: blog.attributes.author }}"
      >{{ blog.attributes.author }}</nuxt-link>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ArticleData } from "~/types";

@Component({})
export default class Meta extends Vue {
  @Prop() blog!: ArticleData;
}
</script>

