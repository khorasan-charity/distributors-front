<template>
  <div class="pa-5">
    <Grid :tableTitle="this.tableTitle" :apiUrl="this.apiUrl" :rowModelStringName="this.gridRowModelStringName" />
    <v-btn class="addBtn" fab color="primary">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Grid from "@/components/Grid/Grid.vue";
import { GridRowModelName } from "@/enums/GridRowModelName";

@Component({ name: "DistributorList", components: { Grid } })
export default class DistributorList extends Vue {
  readonly tableTitle: string = "موزعین";
  readonly apiUrl: string = "/Distributor";
  readonly gridRowModelStringName: GridRowModelName = GridRowModelName.DistributorModel;

  constructor() {
    super();
  }

  addDistributor() {
    this.$router.push({ name: "AddDistributor" });
  }
}
</script>

<style lang="scss" scoped>
.addBtn {
  position: fixed;
  left: 20px;
  bottom: 20px;
}
</style>
