import { Dataset } from "../dataset/Dataset";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  datasets?: Array<Dataset>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
