<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page.sync="itemsPerPage"
    class="elevation-1"
    :footer-props="i18n"
    no-data-text="داده‌ای موجود نیست"
    :loading="loading"
    loading-text="در حال بارگذاری"
  ></v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { GridHeaderModel } from "@/models/Grid";
import Gridi18n from "@/i18n/Gridi18n";

@Component({ name: "Grid" })
export default class Grid extends Vue {
  private headers: GridHeaderModel[] = [];
  private items: any[] = [];
  private itemsPerPage: number = 10;
  private loading: boolean = false;
  private i18n = Gridi18n;

  constructor() {
    super();
  }

  async fetch() {}

  @Watch("itemsPerPage")
  onItemsPerPageChange(value: number, oldValue: number) {}
}
</script>
