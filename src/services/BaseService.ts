import StorageKey from "@/enums/StorageKey";
import { DeleteResultModel } from "@/models/ServerResultModel";
import LocalStorageService from "./LocalStorageService";
import axios from "./Axios/Axios";

export default class BaseService {
  protected readonly storageService?: LocalStorageService<StorageKey>;

  constructor() {
    if (!this.storageService) this.storageService = new LocalStorageService<StorageKey>();
  }

  protected async deleteRequest(url: string): Promise<DeleteResultModel> {
    const result = await axios.delete<DeleteResultModel>(url);
    return result.data;
  }
}
