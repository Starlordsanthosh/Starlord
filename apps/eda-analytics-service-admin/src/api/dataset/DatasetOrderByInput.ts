import { SortOrder } from "../../util/SortOrder";

export type DatasetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
  userId?: SortOrder;
};
