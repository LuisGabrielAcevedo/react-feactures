import { Component } from "react";
import PropTypes from "prop-types";
import "../dynamic-form.component.css";

class DynamicFormFieldComponent extends Component {
  visibleValue = true;
  disableValue = false;
  key = () => this.props.field.key;
  model = () => this.props.form.value;
  control = () => this.props.form.controls[this.key()];
  errors = () => this.control().errors;
  errorMessages = () => this.control().errorMessages;
  errorValue = () => !this.control().valid;
  value = () => this.control().value;
  appearance = () => this.props.materialData.appearance || "standard";
  floatLabel = () => this.props.materialData.floatLabel || "";
  label = () =>
    this.props.field.options && this.props.field.options.label
      ? this.props.field.options.label
      : this.props.field.name;
  placeholder = () =>
    this.props.field.options && this.props.field.options.placeholder
      ? this.props.field.options.placeholder
      : "";
  multiple = () =>
    this.props.field.options && this.props.field.options.multiple;
  associationText = () =>
    this.props.field.options && this.props.field.options.associationText
      ? this.props.field.options.associationText
      : "text";
  associationValue = () =>
    this.props.field.options && this.props.field.options.associationValue
      ? this.props.field.options.associationValue
      : "value";
  dependValue = () =>
    this.props.field.options && this.props.field.options.depend;
  hasDisableCondition = () =>
    this.props.field.options && this.props.field.options.disableCondition;
  hasVisibleCondition = () =>
    this.props.field.options && this.props.field.options.visibleCondition;
  handleChange = event => this.updateModel(event.target.value);
  handleChangeCheked = event => this.updateModel(event.target.checked);
  handleFocus = event => this.updateModel(event.target.value);
  updateModel = value => this.props.updateModel(this.key(), value);
  errorMessage = () => this.errorMessages()[Object.keys(this.errors())[0]];
  visible = currentModel =>
    (this.visibleValue = !!this.props.field.options.visibleCondition(
      currentModel
    ));
  disable = currentModel =>
    (this.disableValue = !!this.props.field.options.disableCondition(
      currentModel
    ));

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      filteredOptions: [],
      loading: false,
      showPassword: false
    };
  }

  async loadOptions() {
    this.setState({ loading: true });
    const options = await this.loadFieldOptions();
    this.setState({ options, loading: false });
  }

  async loadFieldOptions(value) {
    return this.props.field.options && this.props.field.options.fieldOptions
      ? await this.props.field.options.fieldOptions(value)
      : [];
  }
}

export default DynamicFormFieldComponent;

DynamicFormFieldComponent.propTypes = {
  field: PropTypes.object,
  materialData: PropTypes.object,
  form: PropTypes.object,
  updateModel: PropTypes.func
};
