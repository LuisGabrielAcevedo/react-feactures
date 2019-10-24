import React from "react";
import Icon from "@material-ui/core/Icon";

export const examplesList = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "mercado-libre",
    redirect: "/mercado-libre"
  },
  // {
  //   name: "spotify",
  //   redirect: "/spotify"
  // },
  {
    name: "youtube",
    redirect: "/youtube"
  }
];

export const gamesList = [];

export const mainList = [
  {
    name: "e-commerce",
    icon: <Icon className="fas fa-store-alt" style={{ width: "1.3em" }} />,
    redirect: "/e-commerce/login"
  },
  {
    name: "examples",
    icon: <Icon className="fab fa-youtube" style={{ width: "1.3em" }} />,
    subList: examplesList
  },
  {
    name: "games",
    icon: <Icon className="fas fa-chess-knight" style={{ width: "1.3em" }} />
    // subList: gamesList
  }
];
