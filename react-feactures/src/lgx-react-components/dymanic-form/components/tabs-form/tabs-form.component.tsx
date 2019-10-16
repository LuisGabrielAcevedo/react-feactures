import * as React from "react";
import { Component } from "react";
import {
  IDynamicFormField,
  IDynamicFormGroup,
  IDynamicFormMainGroup,
  IDynamicFormMaterialData,
  TDynamicFormUpdateModel
} from "../../dynamic-form.interfaces";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import RowFormComponent from "../row-form/form-row.component";

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return <div>{value === index ? <div>{children}</div> : null}</div>;
}

class TabsFormComponent extends Component<TabsFormComponentProps, {}> {
  public state = {
    value: 0
  };

  public changeValue(value: number) {
    this.setState({ value });
  }

  public render() {
    const { value } = this.state;
    const { groups } = this.props;
    const tabs = groups.map((group, i) => (
      <Tab key={i} label={group.name} onClick={() => this.changeValue(i)} />
    ));
    const panels = groups.map((group, i) => (
      <TabPanel key={i} value={value} index={i}>
        {(group.fields as IDynamicFormField[][]).map((fields, j) => (
          <RowFormComponent
            key={j}
            fields={fields}
            form={this.props.form}
            materialData={this.props.materialData}
            updateModel={this.props.updateModel}
          />
        ))}
      </TabPanel>
    ));
    return (
      <div>
        <AppBar position="static" color="primary">
          <Tabs scrollButtons="auto" value={value}>
            {tabs}
          </Tabs>
        </AppBar>
        {panels}
      </div>
    );
  }
}

export default TabsFormComponent;

export interface TabsFormComponentProps {
  groups: IDynamicFormMainGroup[];
  materialData: IDynamicFormMaterialData;
  form: IDynamicFormGroup;
  updateModel: TDynamicFormUpdateModel;
}

export interface TabPanelProps {
  value: number;
  index: number;
  children: any;
}
