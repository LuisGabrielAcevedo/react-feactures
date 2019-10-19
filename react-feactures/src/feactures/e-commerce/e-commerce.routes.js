import React from "react";

const LoginComponent = React.lazy(() =>
  import("./modules/main/login.component")
);
const MainContentComponent = React.lazy(() =>
  import("./modules/main/main-content.component")
);

const ECommerceRoutes = [
  {
    path: "/e-commerce/login",
    exact: true,
    name: "e-commerce-login",
    component: LoginComponent
  },
  {
    path: "",
    exact: false,
    name: "e-commerce-content",
    component: MainContentComponent
  }
];

export default ECommerceRoutes;
