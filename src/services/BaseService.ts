import StorageKey from "@/enums/StorageKey";
import { DeleteResultModel, GeneralResultModel } from "@/models/ServerResultModel";
import LocalStorageService from "./LocalStorageService";
import axios from "./Axios/Axios";
import { AddDistributorRequestModel } from "@/models/DistributorModel";

export default class BaseService {
  protected readonly storageService?: LocalStorageService<StorageKey>;

  constructor() {
    if (!this.storageService) this.storageService = new LocalStorageService<StorageKey>();
  }

  protected async deleteRequest(url: string): Promise<DeleteResultModel> {
    const result = await axios.delete<DeleteResultModel>(url);
    return result.data;
  }

  protected async postRequest(url: string, request: AddDistributorRequestModel): Promise<GeneralResultModel<boolean>> {
    const result = await axios.post<GeneralResultModel<boolean>>(url, request);
    return result.data;
  }
}
