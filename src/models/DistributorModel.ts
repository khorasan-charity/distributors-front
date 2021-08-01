export interface DistributorGridResultItemsModel {
  id: number;
  firstName: string;
  lastName: string;
  nationalId: string;
  mobileNumber: string;
  password: string;
  avatarUrl: null;
  description: string;
  createdAt: string;
}

export interface AddDistributorRequestModel {
  firstName: string;
  lastName: string;
  nationalId: string;
  mobileNumber: string;
  password: string;
  avatarUrl: string | null;
  description: string | null;
}
