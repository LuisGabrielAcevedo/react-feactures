import React from "react";
import AdministrationRoutes from "./administration.routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "../../../../lgx-react-components/index";

class AdministrationComponent extends React.Component {
  render() {
    return (
      <div>
        <React.Suspense fallback={<SimpleLoadingComponent />}>
          <Switch>
            {AdministrationRoutes.map((route, i) => {
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
            <Redirect from="/" to="/e-commerce/administration/users/list" />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default AdministrationComponent;
