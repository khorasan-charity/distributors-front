<template>
  <div class="pa-5">
    <Grid
      :tableTitle="this.tableTitle"
      :apiUrl="this.apiUrl"
      :rowModelStringName="this.gridRowModelStringName"
      :gridCommandController="gridCommandController"
    />
    <v-btn @click="openAddForm" class="addBtn" fab color="primary">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    <AddDistributor ref="addDialog" :gridCommandController="gridCommandController" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Grid from "@/components/Grid/Grid.vue";
import { GridRowModelName } from "@/enums/GridRowModelName";
import { GridCommand } from "@/enums/GridCommand";
import { BehaviorSubject } from "rxjs";
import AddDistributor from "@/components/Dialogs/Distributors/AddDistributor.vue";

@Component({ name: "DistributorList", components: { Grid, AddDistributor } })
export default class DistributorList extends Vue {
  readonly tableTitle: string = "موزعین";
  readonly apiUrl: string = "/Distributor";
  readonly gridRowModelStringName: GridRowModelName = GridRowModelName.DistributorModel;
  gridCommandController: BehaviorSubject<GridCommand> = new BehaviorSubject<GridCommand>(GridCommand.REFRESH);
  model: boolean = true;

  constructor() {
    super();
  }

  openAddForm() {
    // @ts-ignore
    this.$refs.addDialog.openDialog();
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
