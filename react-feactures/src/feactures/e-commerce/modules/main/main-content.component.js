import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ToolbarComponent from "./toolbar.component";
import SideListComponent from "./side-list.component";
import MainContentRoutes from "./main-content.routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SimpleLoadingComponent } from "../../../../lgx-react-components/index";

function MainContentComponent() {
  let history = useHistory();
  const [state, setState] = React.useState({
    open: false
  });

  const toggleDrawer = open => event => {
    setState({ ...state, open: open });
  };

  const redirect = item => {
    history.push(item.redirect);
    setState({ ...state, open: false });
  };

  return (
    <div>
      <ToolbarComponent toggleDrawer={value => toggleDrawer(value)} />
      <SwipeableDrawer
        open={state.open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <SideListComponent redirect={item => redirect(item)} />
      </SwipeableDrawer>
      <div>
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
      </div>
    </div>
  );
}

export default MainContentComponent;
