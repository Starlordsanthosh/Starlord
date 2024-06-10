import { DatasetWhereUniqueInput } from "../dataset/DatasetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AnalysisWhereInput = {
  dataset?: DatasetWhereUniqueInput;
  id?: StringFilter;
  result?: JsonFilter;
  typeField?: "Option1";
};
