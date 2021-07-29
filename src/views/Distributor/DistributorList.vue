<template>
  <Grid />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Grid from "@/components/Grid/Grid.vue";

@Component({ name: "DistributorList", components: { Grid } })
export default class DistributorList extends Vue {
  constructor() {
    super();
  }
}
</script>
