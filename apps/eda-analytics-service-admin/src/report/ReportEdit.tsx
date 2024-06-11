import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DatasetTitle } from "../dataset/DatasetTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="dataset.id" reference="Dataset" label="dataset">
          <SelectInput optionText={DatasetTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
