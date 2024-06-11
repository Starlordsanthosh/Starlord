import { AnalysisCreateNestedManyWithoutDatasetsInput } from "./AnalysisCreateNestedManyWithoutDatasetsInput";
import { ReportCreateNestedManyWithoutDatasetsInput } from "./ReportCreateNestedManyWithoutDatasetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DatasetCreateInput = {
  analyses?: AnalysisCreateNestedManyWithoutDatasetsInput;
  name?: string | null;
  reports?: ReportCreateNestedManyWithoutDatasetsInput;
  status?: "Option1" | null;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
