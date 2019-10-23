import React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

class NumericFieldComponent extends DynamicFormFieldComponent {
  getValue = () => this.value() || "";

  render() {
    const error = this.errorValue() ? (
      <FormHelperText error={this.errorValue()}>
        {this.errorMessage()}
      </FormHelperText>
    ) : null;

    return (
      <FormControl fullWidth>
        <InputLabel htmlFor={this.label()}>{this.label()}</InputLabel>
        <Input
          type="number"
          placeholder={this.placeholder()}
          value={this.getValue()}
          onChange={this.handleChange}
          disabled={this.disableValue}
          onBlur={this.handleFocus}
          error={this.errorValue()}
        />
        {error}
      </FormControl>
    );
  }
}

export default NumericFieldComponent;
