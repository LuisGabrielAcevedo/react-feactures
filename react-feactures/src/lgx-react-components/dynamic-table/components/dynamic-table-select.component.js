import React, { Component } from "react";
import {
  DynamicTableTextComponent,
  DynamicTableImageComponent
} from "../constants/index";
import DynamicTableImage from "./components/dynamic-table-image.component";
import DynamicTableText from "./components/dynamic-table-text.component";
import PropTypes from "prop-types";

class DynamicTableSelectComponent extends Component {
  components(currentComponent) {
    const components = {
      [DynamicTableTextComponent]: DynamicTableText,
      [DynamicTableImageComponent]: DynamicTableImage
    };
    return components[currentComponent];
  }

  render() {
    const { header, item } = this.props;
    const Component = this.components(header.component);
    return <Component item={item} header={header} />;
  }
}

DynamicTableSelectComponent.propTypes = {
  header: PropTypes.object,
  item: PropTypes.object
};

export default DynamicTableSelectComponent;
