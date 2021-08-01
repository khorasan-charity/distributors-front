<template>
  <v-dialog persistent v-model="isOpen" width="800">
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>

      <v-card-text class="mt-5">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field outlined label="نام" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field outlined label="خانوادگی" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field outlined label="شماره ملی" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field outlined label="تلفن همراه" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="closeDialog()" color="error">
          <v-icon class="ml-1">mdi-cancel</v-icon>
          انصراف
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :loading="isRemoveBtnLoading" color="primary">
          <v-icon class="ml-1">mdi-content-save</v-icon>
          ثبت
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import DistributorService from "@/services/Distributor/DistributorService";
import { BehaviorSubject } from "rxjs";
import { GridCommand } from "@/enums/GridCommand";

@Component({ name: "AddDistributor" })
export default class AddDistributor extends Vue {
  @Prop({ required: true }) gridCommandController?: BehaviorSubject<GridCommand>;
  private distributorService?: DistributorService;
  isRemoveBtnLoading: boolean = false;
  apiUrl: string = "/Distributor";
  title: string = "موزع جدید";
  isOpen: boolean = false;
  firstName: string = "";
  lastName: string = "";
  nationalId: string = "";
  mobileNumber: string = "";
  password: string = "";
  confirmaPassword: string = "";
  avatarUrl: string = "";
  description: string = "";

  constructor() {
    super();
    if (!this.distributorService) this.distributorService = new DistributorService();
  }

  async add() {
    try {
      const result = await this.distributorService?.add({
        firstName: this.firstName,
        lastName: this.lastName,
        nationalId: this.nationalId,
        mobileNumber: this.mobileNumber,
        password: this.password,
        avatarUrl: this.avatarUrl ?? null,
        description: this.description ?? null
      });
      if (result && result.success && result.result && !result.error) {
        // success snack
        this.closeDialog();
        this.resetAddForm();
        this.gridCommandController?.next(GridCommand.REFRESH);
      } else {
        // service error
      }
    } catch (e) {
      // connection error
    }
  }

  resetAddForm() {
    this.firstName = "";
    this.lastName = "";
    this.nationalId = "";
    this.mobileNumber = "";
    this.password = "";
    this.avatarUrl = "";
    this.description = "";
  }

  openDialog() {
    this.isOpen = true;
  }

  closeDialog() {
    this.isOpen = false;
  }
}
</script>
