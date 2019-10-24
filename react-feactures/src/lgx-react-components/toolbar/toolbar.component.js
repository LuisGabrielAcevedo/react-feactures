import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";

function ToolbarComponent({ title, menuButton, backgroundColor }) {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor }}>
        <Toolbar>
          {menuButton || null}
          {title || null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ToolbarComponent.propTypes = {
  title: PropTypes.element,
  menuButton: PropTypes.element,
  backgroundColor: PropTypes.string
};

export default ToolbarComponent;
