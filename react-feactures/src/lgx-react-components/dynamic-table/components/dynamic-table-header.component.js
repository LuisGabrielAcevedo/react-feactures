import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

class DynamicTableHeaderComponent extends Component {
  render() {
    const { headers } = this.props;
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        className="table-header"
      >
        {headers.map((header, i) => (
          <Grid item key={i} xs>
            <span>{header.label}</span>
          </Grid>
        ))}
      </Grid>
    );
  }
}

DynamicTableHeaderComponent.propTypes = {
  headers: PropTypes.array
};

export default DynamicTableHeaderComponent;
