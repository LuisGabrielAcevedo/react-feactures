import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import { toolbarComponentStyle } from "./main.styles";
const useStyles = makeStyles(theme => toolbarComponentStyle(theme));

function ToolbarComponent({ toggleDrawer }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React feactures
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ToolbarComponent.propTypes = {
  toggleDrawer: PropTypes.func
};

export default ToolbarComponent;
