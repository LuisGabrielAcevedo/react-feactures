import React from "react";

const HomeComponent = React.lazy(() => import("../home/home.component"));
const MyAccountComponent = React.lazy(() =>
  import("../my-account/my-account.component")
);
const ChatComponent = React.lazy(() => import("../chat/chat.component"));
const InventoryComponent = React.lazy(() =>
  import("../inventory/inventory.component")
);
const AdministrationComponent = React.lazy(() =>
  import("../administration/administration.component")
);
const SaleComponent = React.lazy(() => import("../sale/sale.component"));

const MainContentRoutes = [
  {
    path: "/e-commerce/home",
    exact: true,
    name: "e-commerce-home",
    component: HomeComponent
  },
  {
    path: "/e-commerce/my-account",
    exact: true,
    name: "e-commerce-my-account",
    component: MyAccountComponent
  },
  {
    path: "/e-commerce/administration",
    exact: false,
    name: "e-commerce-administration",
    component: AdministrationComponent
  },
  {
    path: "/e-commerce/chat",
    exact: true,
    name: "e-commerce-chat",
    component: ChatComponent
  },
  {
    path: "/e-commerce/inventory",
    exact: false,
    name: "e-commerce-inventory",
    component: InventoryComponent
  },
  {
    path: "/e-commerce/sale",
    exact: false,
    name: "e-commerce-sale",
    component: SaleComponent
  }
];

export default MainContentRoutes;
