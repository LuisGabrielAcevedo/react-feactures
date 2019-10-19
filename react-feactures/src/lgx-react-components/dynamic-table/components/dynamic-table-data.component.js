import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import DynamicTableSelectComponent from "./dynamic-table-select.component";

class DynamicTableDataComponent extends Component {
  render() {
    const { data, headers } = this.props;
    return (
      <div className="table-data">
        {data.map((item, i) => (
          <div key={i} className="table-data-row">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className="table-data-header"
            >
              {headers.map((header, j) => (
                <Grid key={j} item xs>
                  <DynamicTableSelectComponent item={item} header={header} />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    );
  }
}

DynamicTableDataComponent.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array
};

export default DynamicTableDataComponent;
