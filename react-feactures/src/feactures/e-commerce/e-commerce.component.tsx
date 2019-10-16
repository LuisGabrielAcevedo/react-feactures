import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SimpleLoadingComponent from "src/lgx-react-components/simple-loading/simple-loading.component";
import ECommerceRoutes from "./e-commerce.routes";

class ECommerceComponent extends React.Component {
  public render() {
    return (
      <div>
        <React.Suspense fallback={<SimpleLoadingComponent />}>
          <Switch>
            {ECommerceRoutes.map((route, i) => {
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
          </Switch>
          <Redirect to="/e-commerce/login" />
        </React.Suspense>
      </div>
    );
  }
}

export default ECommerceComponent;
