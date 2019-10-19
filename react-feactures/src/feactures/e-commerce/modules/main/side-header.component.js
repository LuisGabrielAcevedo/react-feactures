import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { sideHeaderComponentStyle } from "./main.styles";

const useStyles = makeStyles(sideHeaderComponentStyle);

function SideHeaderComponent() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Remy Sharp"
        src={require("../../../../assets/images/default-image.jpg")}
        className={classes.avatar}
      />
    </Grid>
  );
}

export default SideHeaderComponent;
