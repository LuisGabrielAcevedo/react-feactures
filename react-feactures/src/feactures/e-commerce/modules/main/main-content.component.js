import React from "react";
import { loadCSS } from "fg-loadcss";
import { makeStyles } from "@material-ui/core/styles";
import { mainContentComponentStyle } from "./main.styles";
import MainContentRoutes from "./main-content.routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  SimpleLoadingComponent,
  ToolbarComponent,
  DrawerComponent
} from "../../../../lgx-react-components/index";
import { mainList } from "./main-content-side-list.constants";
import MainContentSideHeaderComponent from "./main-content-side-header.component";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
const useStyles = makeStyles(mainContentComponentStyle);

function MainContentComponent() {
  let history = useHistory();
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  const [state, setState] = React.useState({
    open: false,
    sideList: mainList
  });

  const toggleDrawer = open => event => {
    setState({ ...state, open });
  };

  const changeSideList = listItem => event => {
    if (listItem.back) setState({ ...state, sideList: mainList });
    if (listItem.subList) setState({ ...state, sideList: listItem.subList });
    if (listItem.redirect) {
      history.push(listItem.redirect);
      setState({ ...state, open: false });
    }
  };

  return (
    <Grid container direction="column" className={classes.mainContentContainer}>
      <Grid item>
        <ToolbarComponent
          title={<Typography variant="h6">REACT E-COMMERCE</Typography>}
          backgroundColor={"#3f51b5"}
          menuButton={
            <IconButton
              color="inherit"
              style={{ marginRight: "10px" }}
              onClick={toggleDrawer(true)}
            >
              <Icon>menu</Icon>
            </IconButton>
          }
        />
      </Grid>
      <Grid item>
        <DrawerComponent
          open={state.open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          activeRoute={history.location.pathname}
          changeSideList={changeSideList}
          sideList={state.sideList}
          sideHeaderComponent={<MainContentSideHeaderComponent />}
        />
      </Grid>
      <Grid item xs className={classes.content}>
        <React.Suspense fallback={<SimpleLoadingComponent />}>
          <Switch>
            {MainContentRoutes.map((route, i) => {
              return route.component ? (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component}
                />
              ) : null;
            })}
            <Redirect from="/" to="/e-commerce/home" />
          </Switch>
        </React.Suspense>
      </Grid>
    </Grid>
  );
}

export default MainContentComponent;
