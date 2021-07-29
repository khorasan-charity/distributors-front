export interface GridResultModel<T extends object> {
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

export interface GridHeaderModel {
  text: string;
  value: string;
  align?: string;
  sortable?: boolean;
}
