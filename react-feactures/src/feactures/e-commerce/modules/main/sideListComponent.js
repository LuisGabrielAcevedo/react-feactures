import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { loadCSS } from "fg-loadcss";
import { sideListComponentStyle } from "./main.styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import SideHeaderComponent from "./side-header.component";
import PropTypes from "prop-types";
const useStyles = makeStyles(sideListComponentStyle);

const inventoryItems = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "Products",
    redirect: "/e-commerce/inventory/products/list"
  },
  {
    name: "Categories",
    redirect: "/e-commerce/inventory/product-categories/list"
  },
  {
    name: "Types",
    redirect: "/e-commerce/inventory/product-types/list"
  },
  {
    name: "Brands",
    redirect: "/e-commerce/inventory/brands/list"
  },
  {
    name: "Rooms",
    redirect: "/e-commerce/inventory/rooms/list"
  },
  {
    name: "Vendors",
    redirect: "/e-commerce/inventory/vendors/list"
  }
];

const saleItems = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "Orders",
    icon: <Icon className="fas fa-list" style={{ width: "1.3em" }} />
  },
  {
    name: "POS",
    icon: <Icon className="fas fa-shopping-cart" style={{ width: "1.3em" }} />
  },
  {
    name: "Customers",
    icon: <Icon className="fas fa-users" style={{ width: "1.3em" }} />
  }
];

const administrationItems = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "Users",
    icon: <Icon className="fas fa-users" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/administration/users/list"
  },
  {
    name: "Roles",
    icon: <Icon className="fas fa-user-tag" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/administration/roles/list"
  }
];

const mainItems = [
  {
    name: "Home",
    icon: <Icon className="fas fa-home" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/home"
  },
  {
    name: "My account",
    icon: <Icon className="fas fa-user-tag" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/my-account"
  },
  {
    name: "Administration",
    icon: <Icon className="fas fa-users-cog" style={{ width: "1.3em" }} />,
    subItems: administrationItems
  },
  {
    name: "Inventory",
    icon: <Icon className="fas fa-boxes" style={{ width: "1.3em" }} />,
    subItems: inventoryItems
  },
  {
    name: "Sale",
    icon: <Icon className="fas fa-store-alt" style={{ width: "1.3em" }} />,
    subItems: saleItems
  },
  {
    name: "Chat",
    icon: <Icon className="fas fa-comments" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/chat"
  }
];

function SideListComponent({ redirect }) {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  const [state, setState] = React.useState({
    list: mainItems
  });

  const changeList = item => event => {
    if (item.back) setState({ ...state, list: mainItems });
    if (item.subItems) setState({ ...state, list: item.subItems });
    if (item.redirect) redirect(item);
  };

  return (
    <div className={classes.list} role="presentation">
      <SideHeaderComponent />
      <Divider />
      <List>
        {state.list.map((item, index) => (
          <ListItem button key={index} onClick={changeList(item)}>
            {!item.back && item.icon ? (
              <ListItemIcon>{item.icon}</ListItemIcon>
            ) : null}
            <ListItemText primary={item.name || null} />
            {item.back && item.icon ? (
              <ListItemIcon>{item.icon}</ListItemIcon>
            ) : null}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

SideListComponent.propTypes = {
  redirect: PropTypes.func
};

export default SideListComponent;
