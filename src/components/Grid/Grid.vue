<template>
  <div id="abm-table">
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :title="tableTitle"
      :loading="loading"
      loading-text="در حال بارگذاری"
      no-data-text="داده‌ای موجود نیست"
      :server-items-length="totalItems"
      class="elevation-1"
      fixed-header
      @contextmenu:row="handleRightClick"
      @click:row="handleClick"
    ></v-data-table>

    <v-menu v-model="showRightClickMenu" :position-x="x" :position-y="y" absolute offset-y>
      <v-list>
        <v-list-item v-for="(item, index) in contextMenuItems" :key="index">
          <v-list-item-title @click="item.onClick" style="cursor: pointer">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <DeleteDialog
      :message="deleteDialogMessage"
      :title="deleteDialogTitle"
      :apiUrl="apiUrl"
      :isRemoveBtnLoading="isRemoveButtonLoading"
      ref="deleteDialog"
      @removeClicked="remove"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { GridHeaderModel } from "@/models/GridModel";
import { GridRowModelName } from "@/enums/GridRowModelName";
import GridService from "@/services/Grid/GridService";
import { DistributorGridResultItemsModel } from "@/models/DistributorModel";
import { distributorGridHeaders } from "@/constants/GridHeader";
import { ContextMenuItemModel } from "@/models/ContextMenuModel";
import DeleteDialog from "@/components/Dialogs/DeleteDialog.vue";
import DistributorService from "@/services/Distributor/DistributorService";

@Component({ name: "Grid", components: { DeleteDialog } })
export default class Grid extends Vue {
  @Prop({ required: true }) tableTitle?: string;
  @Prop({ required: true }) apiUrl?: string;
  @Prop({ required: true }) rowModelStringName?: GridRowModelName;
  gridService?: GridService;
  distributorService?: DistributorService;
  headers: GridHeaderModel[] = [];
  items: any[] = [];
  totalItems: number = 0;
  itemsPerPage: number = 10;
  page: number = 1;
  loading: boolean = false;
  showRightClickMenu: boolean = false;
  x: number = 0;
  y: number = 0;
  contextMenuItems: ContextMenuItemModel[] = [
    { text: "مشاهده", onClick: () => {} },
    {
      text: "حذف",
      onClick: () => {
        // @ts-ignore
        this.$refs.deleteDialog.openDialog();
      }
    }
  ];
  toRemoveId: number = 0;
  isRemoveButtonLoading: boolean = false;

  constructor() {
    super();
    if (!this.gridService) this.gridService = new GridService();
    if (!this.distributorService) this.distributorService = new DistributorService();
  }

  async fetch() {
    let result;
    const url = this.apiUrl + `?page=${this.page}&take=${this.itemsPerPage}`;
    this.loading = true;
    switch (this.rowModelStringName) {
      case GridRowModelName.DistributorModel:
        result = await this.gridService?.getData<DistributorGridResultItemsModel>(url);
        break;
      case GridRowModelName.DonorModel:
        break;
      case GridRowModelName.ScheduleModel:
        break;
      default:
        break;
    }
    if (result && result.result && result.success && !result.error) {
      this.items = result.result.items;
      this.totalItems = result.result.totalCount;
      this.loading = false;
      console.log(result);
    } else {
      // snack service for error
      this.loading = false;
    }
  }

  async mounted() {
    switch (this.rowModelStringName) {
      case GridRowModelName.DistributorModel:
        this.headers = distributorGridHeaders;
        break;
      default:
        break;
    }
    await this.fetch();
  }

  handleClick(data: DistributorGridResultItemsModel) {
    console.log(data);
  }

  handleRightClick(
    e: MouseEvent,
    {
      // @ts-ignore
      item
    }
  ) {
    e.preventDefault();
    this.showRightClickMenu = false;
    this.x = e.clientX;
    this.y = e.clientY;
    this.$nextTick(() => {
      this.showRightClickMenu = true;
    });
    this.toRemoveId = item.id;
  }

  async remove() {
    this.isRemoveButtonLoading = true;
    const result = await this.distributorService?.delete(this.toRemoveId);
    if (result && result.result && result.success && !result.error) {
      // snack service success
      // @ts-ignore
      this.$refs.deleteDialog.closeDialog();
      this.isRemoveButtonLoading = false;
      this.toRemoveId = 0;
      this.fetch();
    } else {
      // snack service error
      this.isRemoveButtonLoading = false;
    }
  }

  get deleteDialogTitle(): string {
    switch (this.rowModelStringName) {
      case GridRowModelName.DistributorModel:
        return "حذف موزع";
      default:
        return "";
    }
  }

  get deleteDialogMessage(): string {
    switch (this.rowModelStringName) {
      case GridRowModelName.DistributorModel:
        return "شما در حال حذف موزع هستید. آیا ادامه می‌دهید؟";
      default:
        return "";
    }
  }

  @Watch("itemsPerPage")
  async onItemsPerPageChange(value: number, oldValue: number) {
    await this.fetch();
  }

  @Watch("page")
  async onPageChange(value: number, oldValue: number) {
    await this.fetch();
  }
}
</script>

<style lang="scss" scoped>
.elevation-1::v-deep {
  tr:hover {
    cursor: pointer;
  }

  tr.v-data-table__empty-wrapper {
    cursor: default;
  }
  .v-data-footer__select {
    margin-right: 0;
  }
  .v-data-footer {
    width: 100%;
  }
}

.v-list {
  padding: 0px;
}

.v-list-item::v-deep:hover {
  background-color: lightgrey;
}
</style>
