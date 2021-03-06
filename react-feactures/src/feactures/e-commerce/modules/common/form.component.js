import React from "react";
import {
  TitleBarComponent,
  DynamicFormComponent,
  DynamicFormFilledAppearance
} from "../../../../lgx-react-components/index";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";

class FormComponent extends React.Component {
  form = null;
  modelClass = null;
  resource = null;
  module = null;
  id = null;
  title = this.props.match.params.resource;

  state = {
    data: {},
    loading: false,
    formConfig: {
      fieldsConfig: []
    }
  };

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate(nextProps) {
    if (this.props.match.params.resource !== nextProps.match.params.resource)
      this.updateState();
  }

  async updateState() {
    this.resource = this.props.match.params.resource;
    this.module = this.props.match.params.module;
    this.id = this.props.match.params.id;
    this.title = this.resource;
    const modelClassModule = await import(`../../models/${this.resource}`);
    this.modelClass = modelClassModule.default;
    const formConfigModule = await import(
      `../../metadata/form/${this.resource}`
    );
    this.setState({ ...this.state, formConfig: formConfigModule.default });
    if (this.id) this.loadData();
  }

  async loadData() {
    this.setState({ ...this.state, loading: true });
    const resp = await this.modelClass.findById(this.id);
    this.setState({ ...this.state, loading: false, data: resp.data });
  }

  async submit() {
    const formResp = await this.form.submit();
    formResp.valid
      ? formResp.model._id
        ? this.updateAction(formResp.model)
        : this.saveAction(formResp.model)
      : console.log(formResp);
  }

  async saveAction(model) {
    await this.modelClass.save(model);
    this.props.history.push(`/e-commerce/${this.module}/${this.resource}/list`);
  }

  async updateAction(model) {
    await this.modelClass.update(model._id, model);
    this.props.history.push(`/e-commerce/${this.module}/${this.resource}/list`);
  }

  render() {
    const { history } = this.props;
    const { formConfig, data } = this.state;

    const rightContent = (
      <div>
        <Fab
          size="small"
          color="primary"
          onClick={() => this.submit()}
          style={{ marginRight: "5px" }}
        >
          <CheckIcon />
        </Fab>
        <Fab
          size="small"
          color="primary"
          onClick={() =>
            history.push(`/e-commerce/${this.module}/${this.resource}/list`)
          }
        >
          <CloseIcon />
        </Fab>
      </div>
    );

    return (
      <div>
        <TitleBarComponent title={this.title} rightContent={rightContent} />
        <DynamicFormComponent
          formConfig={formConfig}
          materialData={{
            appearance: DynamicFormFilledAppearance
          }}
          ref={form => (this.form = form)}
          model={data}
        />
      </div>
    );
  }
}

export default withRouter(FormComponent);
