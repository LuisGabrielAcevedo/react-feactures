import React from "react";

const DashboardComponent = React.lazy(() =>
  import("./feactures/dashboard/dashboard.component")
);
const EcommerceComponent = React.lazy(() =>
  import("./feactures/e-commerce/e-commerce.component")
);
const MercadoLibreComponent = React.lazy(() =>
  import("./feactures/examples/mercado-libre/mercado-libre.component")
);
const YoutubeComponent = React.lazy(() =>
  import("./feactures/examples/youtube/youtube.component")
);
const SpotifyComponent = React.lazy(() =>
  import("./feactures/examples/spotify/spotify.component")
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
    path: "/mercado-libre",
    exact: false,
    name: "mercado-libre",
    component: MercadoLibreComponent
  },
  {
    path: "/spotify",
    exact: false,
    name: "spotify",
    component: SpotifyComponent
  },
  {
    path: "/youtube",
    exact: false,
    name: "youtube",
    component: YoutubeComponent
  },
  { path: "/games", exact: true, name: "games", component: GamesComponent }
];

export default AppRoutes;
