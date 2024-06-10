import { DatasetWhereUniqueInput } from "../dataset/DatasetWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type AnalysisUpdateInput = {
  dataset?: DatasetWhereUniqueInput | null;
  result?: InputJsonValue;
  typeField?: "Option1" | null;
};
