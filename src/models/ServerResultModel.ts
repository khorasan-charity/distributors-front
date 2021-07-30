export interface GeneralResultModel<T extends object> {
  result: Result<T>;
  success: boolean;
  error: boolean | null;
}

export interface Result<T extends object> {
  pageNo: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  items: T[];
}

export interface DeleteResultModel {
  result: boolean;
  success: boolean;
  error: boolean | null;
}
