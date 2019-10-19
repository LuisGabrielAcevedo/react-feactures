import React from "react";
import InventoryRoutes from "./inventory.routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "../../../../lgx-react-components/index";

class InventoryComponent extends React.Component {
  render() {
    return (
      <div>
        <React.Suspense fallback={<SimpleLoadingComponent />}>
          <Switch>
            {InventoryRoutes.map((route, i) => {
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
            <Redirect from="/" to="/e-commerce/inventory/products/list" />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default InventoryComponent;
