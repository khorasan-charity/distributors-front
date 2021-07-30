import { GeneralResultModel } from "@/models/ServerResultModel";
import axios from "@/services/Axios/Axios";

export default class GridService {
  constructor() {}

  async getData<T extends object>(apiUrl: string): Promise<GeneralResultModel<T>> {
    let result = await axios.get<GeneralResultModel<T>>(apiUrl);
    return result.data;
  }
}
