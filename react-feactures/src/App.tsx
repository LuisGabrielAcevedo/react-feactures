import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AppRoutes from "./App.routes";
import SimpleLoadingComponent from "./lgx-react-components/simple-loading/simple-loading.component";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Suspense fallback={<SimpleLoadingComponent />}>
            <Redirect to="/e-commerce" />
            <Switch>
              {AppRoutes.map((route, i) => {
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
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
