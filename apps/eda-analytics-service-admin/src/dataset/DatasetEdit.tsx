import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { AnalysisTitle } from "../analysis/AnalysisTitle";
import { ReportTitle } from "../report/ReportTitle";
import { UserTitle } from "../user/UserTitle";

export const DatasetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="analyses"
          reference="Analysis"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
