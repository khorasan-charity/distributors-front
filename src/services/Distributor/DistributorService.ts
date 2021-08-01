import { AddDistributorRequestModel } from "@/models/DistributorModel";
import { DeleteResultModel, GeneralResultModel } from "@/models/ServerResultModel";
import BaseService from "../BaseService";

export default class DistributorService extends BaseService {
  private readonly url = "/Distributor";

  async add(request: AddDistributorRequestModel): Promise<GeneralResultModel<boolean>> {
    return await this.postRequest(this.url, request);
  }

  async delete(id: number): Promise<DeleteResultModel> {
    return await this.deleteRequest(`${this.url}/${id}`);
  }
}
