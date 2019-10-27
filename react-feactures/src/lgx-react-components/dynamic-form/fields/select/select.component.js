import React from "react";
import FormControl from "@material-ui/core/FormControl";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

class SelectComponent extends DynamicFormFieldComponent {
  getValue = () => this.value() || (this.multiple() ? [] : "");
  componentDidMount() {
    this.loadOptions();
  }

  render() {
    return (
      <FormControl fullWidth variant={this.appearance()}>
        <InputLabel htmlFor={this.label()}>{this.label()}</InputLabel>
        <Select
          multiple={this.multiple()}
          value={this.getValue()}
          onChange={this.handleChange}
          onBlur={this.handleFocus}
          error={this.invalid()}
          renderValue={value => (this.multiple() ? value.join(",") : value)}
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
        {this.error()}
      </FormControl>
    );
  }
}

export default SelectComponent;
