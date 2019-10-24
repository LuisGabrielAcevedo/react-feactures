import React from "react";
import Icon from "@material-ui/core/Icon";

export const inventoryList = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "products",
    redirect: "/e-commerce/inventory/products/list"
  },
  {
    name: "product-categories",
    redirect: "/e-commerce/inventory/product-categories/list"
  },
  {
    name: "product-types",
    redirect: "/e-commerce/inventory/product-types/list"
  },
  {
    name: "brands",
    redirect: "/e-commerce/inventory/brands/list"
  },
  {
    name: "rooms",
    redirect: "/e-commerce/inventory/rooms/list"
  },
  {
    name: "vendors",
    redirect: "/e-commerce/inventory/vendors/list"
  }
];

export const saleList = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "orders",
    icon: <Icon className="fas fa-list" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/inventory/orders/list"
  },
  {
    name: "pos",
    icon: <Icon className="fas fa-shopping-cart" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/sale/pos"
  },
  {
    name: "customers",
    icon: <Icon className="fas fa-users" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/inventory/customers/list"
  }
];

export const administrationList = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "users",
    icon: <Icon className="fas fa-users" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/administration/users/list"
  },
  {
    name: "roles",
    icon: <Icon className="fas fa-user-tag" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/administration/roles/list"
  }
];

export const mainList = [
  {
    name: "home",
    icon: <Icon className="fas fa-home" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/home"
  },
  {
    name: "my-account",
    icon: <Icon className="fas fa-user-tag" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/my-account"
  },
  {
    name: "administration",
    icon: <Icon className="fas fa-users-cog" style={{ width: "1.3em" }} />,
    subList: administrationList
  },
  {
    name: "inventory",
    icon: <Icon className="fas fa-boxes" style={{ width: "1.3em" }} />,
    subList: inventoryList
  },
  {
    name: "sale",
    icon: <Icon className="fas fa-store-alt" style={{ width: "1.3em" }} />,
    subList: saleList
  },
  {
    name: "chat",
    icon: <Icon className="fas fa-comments" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/chat"
  },
  {
    name: "react-feactures",
    icon: (
      <Icon
        className="fas fa-arrow-alt-circle-left"
        style={{ width: "1.3em" }}
      />
    ),
    redirect: "/dashboard"
  }
];
