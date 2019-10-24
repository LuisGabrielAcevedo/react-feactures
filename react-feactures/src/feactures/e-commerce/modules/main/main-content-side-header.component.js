import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { sideHeaderComponentStyle } from "./main.styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(sideHeaderComponentStyle);

function MainContentSideHeaderComponent() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Avatar
          alt="Remy Sharp"
          src={require("../../../../assets/images/default-image.jpg")}
          className={classes.avatar}
        />
      </Grid>
      <Grid item>
        <p>Luis Gabriel Acevedo</p>
      </Grid>
    </Grid>
  );
}

export default MainContentSideHeaderComponent;
