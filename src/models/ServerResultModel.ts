export interface GeneralResultModel<T> {
  result: Result<T>;
  success: boolean;
  error: boolean | null;
}

export interface Result<T> {
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
