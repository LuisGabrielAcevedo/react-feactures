import React from "react";

const ListComponent = React.lazy(() => import("../common/list.component"));
const FormComponent = React.lazy(() => import("../common/form.component"));

const InventoryRoutes = [
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
  }
];

export default InventoryRoutes;
