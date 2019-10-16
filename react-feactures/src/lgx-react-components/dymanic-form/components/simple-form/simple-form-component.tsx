import * as React from "react";
import { Component } from "react";
import {
  IDynamicFormField,
  IDynamicFormGroup,
  IDynamicFormMainGroup,
  IDynamicFormMaterialData,
  TDynamicFormUpdateModel
} from "../../dynamic-form.interfaces";
import RowFormComponent from "../row-form/form-row.component";

class SimpleFormComponent extends Component<SimpleFormComponentProps, {}> {
  public render() {
    const rows = (this.props.groups[0].fields as IDynamicFormField[][]).map(
      (row: IDynamicFormField[], i: number) => (
        <RowFormComponent
          key={i}
          fields={row}
          form={this.props.form}
          materialData={this.props.materialData}
          updateModel={this.props.updateModel}
        />
      )
    );
    return <div>{rows}</div>;
  }
}

export default SimpleFormComponent;

export interface SimpleFormComponentProps {
  groups: IDynamicFormMainGroup[];
  materialData: IDynamicFormMaterialData;
  form: IDynamicFormGroup;
  updateModel: TDynamicFormUpdateModel;
}
