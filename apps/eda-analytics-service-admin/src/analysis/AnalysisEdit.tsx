import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DatasetTitle } from "../dataset/DatasetTitle";

export const AnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="dataset.id" reference="Dataset" label="dataset">
          <SelectInput optionText={DatasetTitle} />
        </ReferenceInput>
        <div />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
