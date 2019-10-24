import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { ToolbarComponent } from "../../../lgx-react-components/index";

class MercadoLibreComponent extends React.Component {
  render() {
    return (
      <div>
        <ToolbarComponent
          title={
            <Typography style={{ color: "#333" }} variant="h6">
              Mercado libre
            </Typography>
          }
          backgroundColor={"#fff159"}
          menuButton={
            <IconButton style={{ marginRight: "10px" }}>
              <Icon style={{ width: "1.3em" }}>menu</Icon>
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default MercadoLibreComponent;
