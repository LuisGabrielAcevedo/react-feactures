import React from "react";

const DashboardComponent = React.lazy(() =>
  import("./feactures/dashboard/dashboard.component")
);
const EcommerceComponent = React.lazy(() =>
  import("./feactures/e-commerce/e-commerce.component")
);
const ExamplesComponent = React.lazy(() =>
  import("./feactures/examples/examples.component")
);
const GamesComponent = React.lazy(() =>
  import("./feactures/games/games.component")
);

const AppRoutes = [
  {
    path: "/dashboard",
    exact: true,
    name: "dashboard",
    component: DashboardComponent
  },
  {
    path: "/e-commerce",
    exact: false,
    name: "e-commerce",
    component: EcommerceComponent
  },
  {
    path: "/examples",
    exact: true,
    name: "examples",
    component: ExamplesComponent
  },
  { path: "/games", exact: true, name: "games", component: GamesComponent }
];

export default AppRoutes;
