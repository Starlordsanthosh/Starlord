import { Dataset } from "../dataset/Dataset";
import { JsonValue } from "type-fest";

export type Analysis = {
  createdAt: Date;
  dataset?: Dataset | null;
  id: string;
  result: JsonValue;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
