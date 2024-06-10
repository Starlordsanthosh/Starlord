import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DATASET_TITLE_FIELD } from "../dataset/DatasetTitle";

export const AnalysisList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Analyses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="dataset" source="dataset.id" reference="Dataset">
          <TextField source={DATASET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="result" source="result" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
