import React from "react";
import { loadCSS } from "fg-loadcss";
import { useHistory } from "react-router-dom";
import {
  ToolbarComponent,
  DrawerComponent
} from "../../lgx-react-components/index";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { mainList } from "./dashboard-side-list.constants";

function DashboardComponent() {
  let history = useHistory();

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  const [state, setState] = React.useState({
    open: false,
    sideList: mainList
  });

  const toggleDrawer = open => event => {
    setState({ ...state, open });
  };

  const changeSideList = listItem => event => {
    if (listItem.back) setState({ ...state, sideList: mainList });
    if (listItem.subList) setState({ ...state, sideList: listItem.subList });
    if (listItem.redirect) {
      history.push(listItem.redirect);
      setState({ ...state, open: false });
    }
  };

  return (
    <div>
      <ToolbarComponent
        title={<Typography variant="h6">REACT FEACTURES</Typography>}
        backgroundColor={"black"}
        menuButton={
          <IconButton
            color="inherit"
            style={{ marginRight: "10px" }}
            onClick={toggleDrawer(true)}
          >
            <Icon className="fab fa-react" style={{ width: "1.3em" }} />
          </IconButton>
        }
      />
      <DrawerComponent
        open={state.open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        activeRoute={history.location.pathname}
        changeSideList={changeSideList}
        sideList={state.sideList}
      />
    </div>
  );
}

export default DashboardComponent;
