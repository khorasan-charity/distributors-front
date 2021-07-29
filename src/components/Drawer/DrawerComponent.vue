<template> </template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DistributorService from "../../services/Distributor/DistributorService";

@Component({ name: "DrawerComponent" })
export default class DrawerComponent extends Vue {
  private distributorService?: DistributorService;

  constructor() {
    super();
    if (!this.distributorService) this.distributorService = new DistributorService();
  }

  submit() {
    this.distributorService?.add();
  }
}
</script>
