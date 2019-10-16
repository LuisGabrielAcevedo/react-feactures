import * as React from "react";
import { Component } from "react";
import {
  IDynamicFormMainGroup,
  IDynamicFormMaterialData,
  IDynamicFormModel
} from "../../dynamic-form.interfaces";

class StepsFormComponent extends Component<StepsFormComponentProps, {}> {
  public render() {
    return <div>StepsFormComponent</div>;
  }
}

export default StepsFormComponent;

export interface StepsFormComponentProps {
  fields: IDynamicFormMainGroup[];
  materialData: IDynamicFormMaterialData;
  model: IDynamicFormModel;
}
