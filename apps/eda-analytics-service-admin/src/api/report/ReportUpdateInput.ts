import { DatasetWhereUniqueInput } from "../dataset/DatasetWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  dataset?: DatasetWhereUniqueInput | null;
  file?: InputJsonValue;
};
