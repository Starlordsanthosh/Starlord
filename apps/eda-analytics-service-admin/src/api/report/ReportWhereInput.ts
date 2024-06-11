import { DatasetWhereUniqueInput } from "../dataset/DatasetWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  dataset?: DatasetWhereUniqueInput;
  file?: JsonFilter;
  id?: StringFilter;
};
