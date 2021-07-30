export interface AddDistributorRequestModel {}

export interface EditDistributorRequestModel extends AddDistributorRequestModel {
  id: string;
}

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
