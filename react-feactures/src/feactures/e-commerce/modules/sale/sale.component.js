import React from "react";
import SaleRoutes from "./sale.routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "../../../../lgx-react-components/index";

class SaleComponent extends React.Component {
  render() {
    return (
      <div>
        <React.Suspense fallback={<SimpleLoadingComponent />}>
          <Switch>
            {SaleRoutes.map((route, i) => {
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
            <Redirect from="/" to="/e-commerce/sale/customers/list" />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default SaleComponent;
