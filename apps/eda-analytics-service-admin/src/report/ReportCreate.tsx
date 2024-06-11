import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DatasetTitle } from "../dataset/DatasetTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="dataset.id" reference="Dataset" label="dataset">
          <SelectInput optionText={DatasetTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
