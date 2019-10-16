import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { Component } from "react";
import {
  IDynamicFormField,
  IDynamicFormGroup,
  IDynamicFormMaterialData,
  TDynamicFormUpdateModel
} from "../../dynamic-form.interfaces";
import SelectDynamicFormFieldComponent from "../select-dynamic-form-field/select-dynamic-form-field.component";

class RowFormComponent extends Component<RowFormComponentProps, {}> {
  public render() {
    const fields = this.props.fields.map(
      (field: IDynamicFormField, i: number) => (
        <Grid
          key={i}
          item={true}
          xs={12}
          sm={field.flexConfig!.flex || 12}
          md={field.flexConfig!.flex || 12}
          lg={field.flexConfig!.flex || 12}
          xl={field.flexConfig!.flex || 12}
          style={{ padding: "5px" }}
        >
          <SelectDynamicFormFieldComponent
            key={i}
            field={field}
            form={this.props.form}
            materialData={this.props.materialData}
            updateModel={this.props.updateModel}
          />
        </Grid>
      )
    );
    return (
      <Grid container={true} direction="row">
        {fields}
      </Grid>
    );
  }
}

export default RowFormComponent;

export interface RowFormComponentProps {
  fields: IDynamicFormField[];
  materialData: IDynamicFormMaterialData;
  form: IDynamicFormGroup;
  updateModel: TDynamicFormUpdateModel;
}
