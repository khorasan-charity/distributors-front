<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import DrawerComponent from "./components/Drawer/DrawerComponent.vue";

export default Vue.extend({
  components: { DrawerComponent },
  name: "App",

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
.v-card__title.text-h5 {
  font-family: "Shabnam" !important;
}
</style>
