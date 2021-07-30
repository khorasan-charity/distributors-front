import { DeleteResultModel } from "@/models/ServerResultModel";
import BaseService from "../BaseService";

export default class DistributorService extends BaseService {
  private readonly url = "/Distributor";

  add(): void {}

  async delete(id: number): Promise<DeleteResultModel> {
    return await this.deleteRequest(`${this.url}/${id}`);
  }
}
