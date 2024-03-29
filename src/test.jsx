import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Iconlight from "./Icon/light_icon";
import IconTV from "./Icon/tv_icon";

// Import styles
import "./test.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: "80px",
      justifyContent: "center",

      "& > *": {
        margin: theme.spacing(2),
        width: theme.spacing(60),
        height: theme.spacing(9),
        backgroundColor: "#e0e0e0"
      }
    },
    paperelement: {
      borderRadius: "4"
    }
  })
);

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div id="body-element">
      <span className={classes.root}>
        <Paper
          //style={{ backgroundColor: "#4caf50" }}
          className={classes.paperelement}
        >
          <Iconlight />
        </Paper>
      </span>
      <span className={classes.root} style={{ marginTop: 0 }}>
        <Paper className={classes.paperelement} elevation={4}></Paper>
      </span>
    </div>
  );
}
