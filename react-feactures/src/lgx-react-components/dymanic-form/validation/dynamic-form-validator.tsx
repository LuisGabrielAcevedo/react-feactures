import { TDynamicFormValidatorCallback } from "../dynamic-form.interfaces";

export class DynamicFormValidator {
  private validatorName: string;
  private validatorMessage: string;
  private validatorFn: TDynamicFormValidatorCallback;

  constructor(
    name: string,
    message: string,
    validate: TDynamicFormValidatorCallback
  ) {
    this.validatorName = name;
    this.validatorMessage = message;
    this.validatorFn = validate;
  }

  get name(): string {
    return this.validatorName;
  }

  get message(): string {
    return this.validatorMessage;
  }

  get validate(): TDynamicFormValidatorCallback {
    return this.validatorFn;
  }
}
