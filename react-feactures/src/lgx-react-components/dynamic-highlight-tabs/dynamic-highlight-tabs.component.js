import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function DynamicHighlightTabsComponent({ title, jsx, metadata }) {
  let buttonGroups = [];
  const [state, setState] = React.useState({
    open: false,
    codeSelected: null
  });

  if (jsx)
    buttonGroups.push({
      name: "jsx",
      codeType: "jsx",
      data: jsx
    });

  if (metadata)
    buttonGroups.push({
      name: "metadata",
      codeType: "json",
      data: metadata
    });

  const tabToggle = open => {
    setState({ open: open, codeSelected: "jsx" });
  };

  const setCode = code => {
    setState({ ...state, codeSelected: code });
  };

  const buttonGroup = buttonGroups.length ? (
    <ButtonGroup size="small">
      {buttonGroups.map((button, i) => (
        <Button
          key={i}
          onClick={() => setCode(button.name)}
          style={{
            backgroundColor: button.name === state.codeSelected ? "#eee" : ""
          }}
        >
          {button.name}
        </Button>
      ))}
    </ButtonGroup>
  ) : null;

  return (
    <div>
      <Grid
        container
        direction="row"
        alignContent="center"
        justify="space-between"
        style={{ padding: "12px 12px 2px 12px" }}
      >
        <Grid item>
          {state.open ? buttonGroup : <h4 style={{ margin: 0 }}>{title}</h4>}
        </Grid>
        <Grid item>
          <Tooltip title={"code"}>
            <IconButton
              color="primary"
              size="small"
              onClick={() => tabToggle(!state.open)}
            >
              <Icon>code</Icon>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {state.open
        ? buttonGroups
            .filter(button => button.name === state.codeSelected)
            .map((button, i) => (
              <SyntaxHighlighter
                key={i}
                language={button.codeType}
                style={dark}
              >
                {button.data}
              </SyntaxHighlighter>
            ))
        : null}
    </div>
  );
}

DynamicHighlightTabsComponent.propTypes = {
  title: PropTypes.string,
  jsx: PropTypes.string,
  metadata: PropTypes.any
};

export default DynamicHighlightTabsComponent;
