import { Analysis } from "../analysis/Analysis";
import { Report } from "../report/Report";
import { User } from "../user/User";

export type Dataset = {
  analyses?: Array<Analysis>;
  createdAt: Date;
  id: string;
  name: string | null;
  reports?: Array<Report>;
  status?: "Option1" | null;
  updatedAt: Date;
  uploadedAt: Date | null;
  user?: User | null;
};
