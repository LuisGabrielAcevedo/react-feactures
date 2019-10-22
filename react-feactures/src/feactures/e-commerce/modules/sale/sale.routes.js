import React from "react";

const ListComponent = React.lazy(() => import("../common/list.component"));
const FormComponent = React.lazy(() => import("../common/form.component"));
const PosComponent = React.lazy(() => import("./pos/pos.component"));

const SaleRoutes = [
  {
    path: "/e-commerce/:module/:resource/list",
    exact: true,
    name: "e-commerce-module-resource-list",
    component: ListComponent
  },
  {
    path: "/e-commerce/:module/:resource/new",
    exact: true,
    name: "e-commerce-module-resource-new",
    component: FormComponent
  },
  {
    path: "/e-commerce/:module/:resource/edit/:id",
    exact: true,
    name: "e-commerce-module-resource-new",
    component: FormComponent
  },
  {
    path: "/e-commerce/sale/pos",
    exact: true,
    name: "e-commerce-sale-pos",
    component: PosComponent
  }
];

export default SaleRoutes;
