<template>
  <div>
    <MyButton title="go back" />

    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import MyButton from "~/components/buttons/MyButton.vue";

@Component({
  components: {
    MyButton
  }
})
export default class extends Vue {}
</script>
