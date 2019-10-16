import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";

class EnumSelectComponent extends DynamicFormFieldComponent {
  public componentDidMount() {
    this.loadOptions();
  }

  public render() {
    const error = this.errorValue() ? (
      <FormHelperText error={this.errorValue()}>
        {this.errorMessage()}
      </FormHelperText>
    ) : null;

    return (
      <FormControl fullWidth={true}>
        <InputLabel htmlFor={this.label()}>{this.label()}</InputLabel>
        <Select
          multiple={this.multiple()}
          value={this.getValue()}
          onChange={this.handleChange}
          onBlur={this.handleFocus}
          error={this.errorValue()}
          renderValue={(formattedValue: any) =>
            this.multiple() ? formattedValue.join(",") : formattedValue
          }
        >
          {this.state.options.map((option, i) => (
            <MenuItem key={i} value={option[this.associationValue()]}>
              {this.multiple() ? (
                <Checkbox
                  color="primary"
                  checked={
                    this.getValue().indexOf(option[this.associationValue()]) >
                    -1
                  }
                />
              ) : null}
              <ListItemText primary={option[this.associationText()]} />
            </MenuItem>
          ))}
        </Select>
        {error}
      </FormControl>
    );
  }
  private getValue = () => this.value() || (this.multiple() ? [] : "");
}

export default EnumSelectComponent;
