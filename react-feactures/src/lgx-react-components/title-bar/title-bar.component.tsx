import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { Component } from "react";
import "./title-bar.component.css";

class TitleBarComponent extends Component<ITitleBarComponentProps, {}> {
  public static defaultProps: ITitleBarComponentProps = {
    title: "Title bar component"
  };
  public render() {
    const { title, right } = this.props;
    return (
      <Grid
        container={true}
        direction="row"
        alignContent="center"
        justify="space-between"
        className="title-bar-header"
      >
        <Grid item={true}>
          <h4 className="title-bar-title">{title}</h4>
        </Grid>
        <Grid item={true}>
          <Grid
            container={true}
            direction="row"
            alignContent="center"
            justify="center"
          >
            {right}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default TitleBarComponent;

export interface ITitleBarComponentProps {
  title: string;
  right?: any;
}
