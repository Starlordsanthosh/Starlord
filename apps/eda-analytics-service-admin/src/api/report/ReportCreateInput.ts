import { DatasetWhereUniqueInput } from "../dataset/DatasetWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  dataset?: DatasetWhereUniqueInput | null;
  file?: InputJsonValue;
};
