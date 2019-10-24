import React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SideListComponent from "./side-list.component";

function DrawerComponent({
  open,
  onClose,
  onOpen,
  activeRoute,
  sideList,
  changeSideList,
  sideHeaderComponent
}) {
  return (
    <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
      <SideListComponent
        changeSideList={changeSideList}
        activeRoute={activeRoute}
        sideList={sideList}
        sideHeaderComponent={sideHeaderComponent}
      />
    </SwipeableDrawer>
  );
}
DrawerComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  activeRoute: PropTypes.string,
  changeSideList: PropTypes.func,
  sideList: PropTypes.array,
  sideHeaderComponent: PropTypes.element
};

export default DrawerComponent;
