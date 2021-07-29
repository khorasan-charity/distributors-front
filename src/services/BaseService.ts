import StorageKey from "@/enums/StorageKey";
import LocalStorageService from "./LocalStorageService";

export default class BaseService {
  private readonly storageService?: LocalStorageService<StorageKey>;

  constructor() {
    if (!this.storageService)
      this.storageService = new LocalStorageService<StorageKey>();
  }
}
