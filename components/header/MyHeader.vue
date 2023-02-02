<template>
  <nav>
    <button @click="$router.push(localePath('index'))">Home {{ $i18n.locale}}</button>

     <nuxt-link
      v-if="$i18n.locale !== 'en'"
      :to="switchLocalePath('en')"
    >
      English
    </nuxt-link>
    
    <nuxt-link
      v-if="$i18n.locale !== 'fr'"
      :to="switchLocalePath('fr')"
    >
      FR
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  components: {
  }
})
export default class MyHeader extends Vue {
  
}
</script>
