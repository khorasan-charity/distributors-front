<template>
  <v-dialog class="delete-dialog" v-model="isOpen" @input="$emit('input')" width="500">
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>

      <v-card-text class="delete-dialog__text">
        {{ message }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="closeDialog()" color="error">
          <v-icon class="ml-1">mdi-cancel</v-icon>
          انصراف
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :loading="isRemoveBtnLoading" @click="$emit('removeClicked')" color="primary">
          <v-icon>mdi-delete</v-icon>
          حذف
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({ name: "DeleteDialog" })
export default class DeleteDialog extends Vue {
  @Prop({ required: true }) apiUrl?: string;
  @Prop({ required: true }) message?: string;
  @Prop({ required: true }) title?: string;
  @Prop({ required: true }) isRemoveBtnLoading?: boolean;
  isOpen: boolean = false;

  constructor() {
    super();
  }

  openDialog() {
    this.isOpen = true;
  }

  closeDialog() {
    this.isOpen = false;
  }
}
</script>

<style lang="scss" scoped>
.delete-dialog__text {
  margin-top: 20px;
}
</style>
