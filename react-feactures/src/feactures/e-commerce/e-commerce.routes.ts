import * as React from "react";
import { IRoute } from "src/interfaces/router";

const LoginComponent = React.lazy(() =>
  import("./modules/main/login.component")
);
const MainContentComponent = React.lazy(() =>
  import("./modules/main/main-content.component")
);

const ECommerceRoutes: IRoute[] = [
  {
    path: "/e-commerce/login",
    exact: true,
    name: "dashboard",
    component: LoginComponent
  },
  {
    path: "/e-commerce",
    exact: true,
    name: "e-commerce",
    component: MainContentComponent
  }
];

export default ECommerceRoutes;
