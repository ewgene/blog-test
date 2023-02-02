<template>
  <section>
    <h1 class="header">Authors</h1>
    {{ tags }}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Article } from "../../types";

@Component({
  components: {},
  layout: "blog"
})
export default class extends Vue {
  blog?: Article[];
}
</script>
