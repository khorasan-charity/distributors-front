<template> </template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({ name: "DistributorView" })
export default class DistributorView extends Vue {
  constructor() {
    super();
  }

  async getData() {}

  async mounted() {
    await this.getData();
  }
}
</script>
