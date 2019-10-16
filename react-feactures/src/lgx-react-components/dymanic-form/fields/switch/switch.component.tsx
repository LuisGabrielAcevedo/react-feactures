import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import * as React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";

class SwitchComponent extends DynamicFormFieldComponent {

  public render() {
    const error = this.errorValue() ? (
      <FormHelperText error={this.errorValue()}>
        {this.errorMessage()}
      </FormHelperText>
    ) : null;

    return (
      <FormControl fullWidth={true}>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              value={this.getValue()}
              onChange={this.handleChangeCheked}
            />
          }
          label={this.label()}
          className={this.errorValue() ? "form-error" : ""}
        />
        {error}
      </FormControl>
    );
  }
  private getValue = () => this.value() || false;
}

export default SwitchComponent;
