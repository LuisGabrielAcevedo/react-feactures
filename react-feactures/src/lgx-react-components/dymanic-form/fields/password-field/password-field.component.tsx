import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import * as React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";

class PasswordFieldComponent extends DynamicFormFieldComponent {

  public handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  public handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  public render() {
    const showPassword = this.state.showPassword;
    const error = this.errorValue() ? (
      <FormHelperText error={this.errorValue()}>
        {this.errorMessage()}
      </FormHelperText>
    ) : null;

    return (
      <FormControl fullWidth={true}>
        <InputLabel htmlFor={this.label()}>{this.label()}</InputLabel>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={this.placeholder()}
          value={this.getValue()}
          onChange={this.handleChange}
          disabled={this.disableValue}
          onBlur={this.handleFocus}
          error={this.errorValue()}
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
        {error}
      </FormControl>
    );
  }
  private getValue = () => this.value() || "";
}

export default PasswordFieldComponent;
