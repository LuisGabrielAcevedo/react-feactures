import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { loadCSS } from "fg-loadcss";
import { loginComponentStyle } from "./main.styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import loginForm from "../../metadata/form/login";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import { DynamicFormComponent } from "../../../../lgx-react-components/index";

const useStyles = makeStyles(loginComponentStyle);

function LoginComponent() {
  let history = useHistory();
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  let formComponent;

  const submit = () => async event => {
    const resp = await formComponent.submit();
    if (resp.valid) history.push("/e-commerce/home");
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignContent="center"
      className={classes.container}
    >
      <Grid className={classes.content} item>
        <Grid
          container
          direction="column"
          justify="center"
          alignContent="center"
        >
          <Grid item>
            <Typography className={classes.title} variant="h6">
              REACT E-COMMERCE
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center">
              <Avatar
                className={classes.avatar}
                src={require("../../../../assets/images/store.png")}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid item className={classes.form}>
            <DynamicFormComponent
              ref={form => (formComponent = form)}
              formConfig={loginForm}
            />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={submit()}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginComponent;
