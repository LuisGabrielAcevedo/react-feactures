import React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

class PasswordFieldComponent extends DynamicFormFieldComponent {
  getValue = () => this.value() || "";

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const { showPassword } = this.state;
    const DynamicInput = this.selectInput();
    return (
      <FormControl fullWidth variant={this.appearance()}>
        <InputLabel htmlFor={this.label()}>{this.label()}</InputLabel>
        <DynamicInput
          type={showPassword ? "text" : "password"}
          placeholder={this.placeholder()}
          value={this.getValue()}
          onChange={this.handleChange}
          disabled={this.disableValue}
          onBlur={this.handleFocus}
          error={this.invalid()}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {this.error()}
      </FormControl>
    );
  }
}

export default PasswordFieldComponent;
