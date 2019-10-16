import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import * as React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";

class TextFieldComponent extends DynamicFormFieldComponent {

  public render() {
    const error = this.errorValue() ? (
      <FormHelperText error={this.errorValue()}>
        {this.errorMessage()}
      </FormHelperText>
    ) : null;

    return (
      <FormControl fullWidth={true}>
        <InputLabel htmlFor={this.label()}>{this.label()}</InputLabel>
        <Input
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
  private getValue = () => this.value() || "";
}

export default TextFieldComponent;
