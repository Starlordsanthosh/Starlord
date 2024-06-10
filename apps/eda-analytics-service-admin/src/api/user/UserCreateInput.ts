import { DatasetCreateNestedManyWithoutUsersInput } from "./DatasetCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  datasets?: DatasetCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
