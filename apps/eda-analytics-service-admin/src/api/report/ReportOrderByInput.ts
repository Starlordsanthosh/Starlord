import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  datasetId?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
