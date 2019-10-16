import * as React from "react";
import { Component } from "react";
import {
  IDynamicFormMainGroup,
  IDynamicFormMaterialData,
  IDynamicFormModel
} from "../../dynamic-form.interfaces";

class PanelsFormComponent extends Component<PanelsFormComponentProps, {}> {
  public render() {
    return <div>PanelsFormComponent</div>;
  }
}

export default PanelsFormComponent;

export interface PanelsFormComponentProps {
  fields: IDynamicFormMainGroup[];
  materialData: IDynamicFormMaterialData;
  model: IDynamicFormModel;
}
