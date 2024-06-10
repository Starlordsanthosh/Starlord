import { Dataset } from "../dataset/Dataset";
import { JsonValue } from "type-fest";

export type Report = {
  createdAt: Date;
  dataset?: Dataset | null;
  file: JsonValue;
  id: string;
  updatedAt: Date;
};
