<template>
  <div>
   <nuxt-link
      v-for="b in blogs" 
      :key="b.attributes.slug"
      :to="localePath({name: 'blog-name', params: { name: b.attributes.slug }})"
    >
      <p>
        {{ b.attributes.title }}
      </p>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ArticleData } from "~/types";

@Component({})
export default class ArticleList extends Vue {
  @Prop() blogs!: ArticleData[];
}
</script>

<style scoped>
</style>
