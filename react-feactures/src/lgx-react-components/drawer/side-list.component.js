import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { sideListComponentStyle } from "./drawer.styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
const useStyles = makeStyles(sideListComponentStyle);

function SideListComponent({
  changeSideList,
  activeRoute,
  sideList,
  sideHeaderComponent
}) {
  const classes = useStyles();

  return (
    <div className={classes.list} role="presentation">
      {sideHeaderComponent ? (
        <div>
          {sideHeaderComponent}
          <Divider />
        </div>
      ) : null}
      <List>
        {sideList.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={changeSideList(item)}
            className={
              activeRoute.indexOf(item.name) > -1 ? classes.activeRoute : ""
            }
          >
            {!item.back && item.icon ? (
              <ListItemIcon
                className={
                  activeRoute.indexOf(item.name) > -1 ? classes.activeColor : ""
                }
              >
                {item.icon}
              </ListItemIcon>
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
  changeSideList: PropTypes.func,
  activeRoute: PropTypes.string,
  sideList: PropTypes.array,
  sideHeaderComponent: PropTypes.element
};

export default SideListComponent;
