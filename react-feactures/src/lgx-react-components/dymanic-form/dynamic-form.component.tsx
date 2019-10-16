import { cloneDeep, set } from "lodash";
import * as React from "react";
import PanelsFormComponent from "./components/panels-form/panels-form.component";
import SimpleFormComponent from "./components/simple-form/simple-form-component";
import StepsFormComponent from "./components/steps-form/steps-form.component";
import TabsFormComponent from "./components/tabs-form/tabs-form.component";
import {
  EDynamicFormType,
  IDynamicFormFormatFieldsResponse,
  IDynamicFormGroup,
  IDynamicFormModel,
  IDynamicFormResponse
} from "./dynamic-form.interfaces";
import DynamicFormMixinComponent, {
  IDynamicFormComponentProps
} from "./dynamic.form.mixin";

class DynamicFormComponent extends DynamicFormMixinComponent {
  public componentDidMount() {
    const formatFieldResponse: IDynamicFormFormatFieldsResponse = this.formatFields(
      this.props.model!
    );
    this.setState({
      mainGroupsFormatted: formatFieldResponse.mainGroupsFormatted,
      form: formatFieldResponse.formGroup
    });
  }

  public componentWillUpdate(nextProps: IDynamicFormComponentProps) {
    if (this.props.model !== nextProps.model) {
      const formatFieldResponse: IDynamicFormFormatFieldsResponse = this.formatFields(
        nextProps.model!
      );
      this.setState({
        mainGroupsFormatted: formatFieldResponse.mainGroupsFormatted,
        form: formatFieldResponse.formGroup
      });
    }
  }

  public async submit(): Promise<IDynamicFormResponse> {
    const form: IDynamicFormGroup = cloneDeep(this.state.form!);
    this.validateAll(form);
    this.validateFormGroup(form);
    this.setState({ form });
    return {
      valid: form.valid,
      model: form.value
    };
  }

  public render() {
    const FormTypeComponent =
      this.state.mainGroupsFormatted.length > 1
        ? this.getComponent()
        : SimpleFormComponent;

    const form = this.state.mainGroupsFormatted.length ? (
      <FormTypeComponent
        groups={this.state.mainGroupsFormatted}
        form={this.state.form}
        materialData={this.props.materialData!}
        updateModel={(key: string, value: any) => this.updateModel(key, value)}
      />
    ) : null;

    return <div>{form}</div>;
  }

  private formatFields(
    model: IDynamicFormModel
  ): IDynamicFormFormatFieldsResponse {
    return this.formatFieldsAction(
      this.props.formConfig,
      model,
      this.props.columns
    );
  }

  private getComponent() {
    const components: { [key: string]: any } = {
      [EDynamicFormType.panels]: PanelsFormComponent,
      [EDynamicFormType.steps]: StepsFormComponent,
      [EDynamicFormType.tabs]: TabsFormComponent
    };
    return components[this.props.formType!];
  }

  private updateModel(key: string, value: any) {
    const form: IDynamicFormGroup = cloneDeep(this.state.form!);
    form.controls[key].value = value;
    form.value = set(form.value, key!, value);
    this.validateControl(form, key);
    this.validateFormGroup(form);
    this.setState({ form });
  }
}

export default DynamicFormComponent;
