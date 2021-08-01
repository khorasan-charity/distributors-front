<template>
  <v-btn @click="$router.push({ name: 'Distributors' })">
    موزعین
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {}
});
</script>
