import { AnalysisUpdateManyWithoutDatasetsInput } from "./AnalysisUpdateManyWithoutDatasetsInput";
import { ReportUpdateManyWithoutDatasetsInput } from "./ReportUpdateManyWithoutDatasetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DatasetUpdateInput = {
  analyses?: AnalysisUpdateManyWithoutDatasetsInput;
  name?: string | null;
  reports?: ReportUpdateManyWithoutDatasetsInput;
  status?: "Option1" | null;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
