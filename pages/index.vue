<template>
  <div>
    <section>
      <h1 class="header">Blogs</h1>

      <ArticleList :blogs="blogs" />
    </section>

    <section>
      <h2>Tags</h2>
      <p v-for="tag in tags" :key="tag">
        <nuxt-link :to="localePath({name: 'blog-tag-tag', params: {tag}})">{{ tag }}</nuxt-link>
      </p>
    </section>

    <section>
      <h2>Categories</h2>

      <p v-for="category in categories" :key="category">
        <nuxt-link :to="localePath({name: 'blog-category-category', params: {category}})">
          {{ category }}
        </nuxt-link>
      </p>
    </section>

    <section>
      <h2>Authors</h2>

      <p v-for="author in authors" :key="author">
        <nuxt-link :to="localePath({name: 'blog-author-author', params: {author}})">
          {{ author }}
        </nuxt-link>
      </p>
    </section>
  </div>
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
  async asyncData({ app }) {
    const blogs = await new ContentHelper().getBlogsByPage(app.i18n.locale, 1, 9);
    const tags = await new ContentHelper().getTags(app.i18n.locale);
    const categories = await new ContentHelper().getCategories(app.i18n.locale);
    const authors = await new ContentHelper().getAuthors(app.i18n.locale);
    return { blogs, tags, categories, authors };
  }
})
export default class extends Vue {
  blogs?: ArticleRaw[];
}
</script>
