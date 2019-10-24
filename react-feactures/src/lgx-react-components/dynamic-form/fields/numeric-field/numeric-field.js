import React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

class NumericFieldComponent extends DynamicFormFieldComponent {
  getValue = () => this.value() || "";

  render() {
    const DynamicInput = this.selectInput();
    return (
      <FormControl fullWidth variant={this.appearance()}>
        <InputLabel htmlFor={this.label()}>{this.label()}</InputLabel>
        <DynamicInput
          type="number"
          placeholder={this.placeholder()}
          value={this.getValue()}
          onChange={this.handleChange}
          disabled={this.disableValue}
          onBlur={this.handleFocus}
          error={this.invalid()}
        />
        {this.error()}
      </FormControl>
    );
  }
}

export default NumericFieldComponent;
