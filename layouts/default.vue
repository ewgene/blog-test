<template>
  <div>
    <MyHeader />
    <nuxt/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import MyHeader from "~/components/header/MyHeader.vue";

@Component({
  components: {
    MyHeader
  }
})
export default class extends Vue {}
</script>

