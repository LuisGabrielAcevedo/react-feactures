import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { ToolbarComponent } from "../../../lgx-react-components/index";

class SpotifyComponent extends React.Component {
  render() {
    return (
      <div>
        <ToolbarComponent
          title={<Typography variant="h6">Spotify</Typography>}
          backgroundColor={"black"}
          menuButton={
            <IconButton style={{ marginRight: "10px" }}>
              <Icon className="fab fa-spotify" style={{ width: "1.3em" }} />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default SpotifyComponent;
