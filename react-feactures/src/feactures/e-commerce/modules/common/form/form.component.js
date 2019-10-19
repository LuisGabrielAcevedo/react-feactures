import React from "react";
import {
  defaultPagination,
  TitleBarComponent
} from "../../../../../lgx-react-components/index";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { withRouter } from "react-router-dom";

class FormComponent extends React.Component {
  modelClass = null;
  resource = null;
  module = null;
  title = this.props.match.params.resource;

  state = {
    data: [],
    loading: false
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
    this.title = this.resource;
    const modelClassModule = await import(`../../../models/${this.resource}`);
    this.modelClass = modelClassModule.default;
  }

  render() {
    const { history } = this.props;
    const rightContent = (
      <div>
        <Fab size="small" color="primary" style={{ marginRight: "5px" }}>
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
      </div>
    );
  }
}

export default withRouter(FormComponent);
