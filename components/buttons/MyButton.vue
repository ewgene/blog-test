<template>
  <div>
    <button @click="goTo">{{ title }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class MyButton extends Vue {
  @Prop({ type: Object }) readonly to!: string;
  @Prop({ type: String, required: true }) readonly title!: string;

  goTo() {
    if (this.to) {
      this.$router.push(this.to);
      return;
    }

    this.$router.go(-1);
  }
}
</script>

<style scoped>
</style>
