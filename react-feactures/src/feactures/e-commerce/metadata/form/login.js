import {
  DynamicFormTextFieldComponent,
  DynamicFormPasswordFieldComponent,
  DynamicFormValidators
} from "../../../../lgx-react-components/index";

const loginForm = {
  fieldsConfig: [
    {
      name: "Email",
      key: "email",
      component: DynamicFormTextFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field email is required"
        })
      ]
    },
    {
      name: "Password",
      key: "password",
      component: DynamicFormPasswordFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field password is required"
        })
      ]
    }
  ]
};

export default loginForm;
