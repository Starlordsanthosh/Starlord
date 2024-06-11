import { AnalysisListRelationFilter } from "../analysis/AnalysisListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DatasetWhereInput = {
  analyses?: AnalysisListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  reports?: ReportListRelationFilter;
  status?: "Option1";
  uploadedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
