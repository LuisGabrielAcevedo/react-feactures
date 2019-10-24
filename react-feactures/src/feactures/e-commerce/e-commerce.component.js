import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "../../lgx-react-components/index";
import ECommerceRoutes from "./e-commerce.routes";
import "./e-commerce.component.css";

class ECommerceComponent extends React.Component {
  render() {
    return (
      <div className="e-commerce-app">
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
            <Redirect from="/" to="/e-commerce/login" />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default ECommerceComponent;
