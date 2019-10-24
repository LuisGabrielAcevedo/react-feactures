import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "./lgx-react-components/index";
import AppRoutes from "./App.routes";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    const { router } = this.props;
    // Redirect
    const redirect = router.redirectData ? (
      <Redirect to={router.redirectData.path} />
    ) : null;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Suspense fallback={<SimpleLoadingComponent />}>
            {redirect}
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
              <Redirect to="/e-commerce" />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    router: state.router
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
