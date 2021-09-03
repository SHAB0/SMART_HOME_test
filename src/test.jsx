import React from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  Grid
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Iconlight from "./Icon/light_icon";
import IconTV from "./Icon/tv_icon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: "80px",
      justifyContent: "center",

      "& > *": {
        margin: theme.spacing(2),
        width: theme.spacing(30),
        height: theme.spacing(20),
        backgroundColor: "#e8eaf6"
      }
    },
    paperelement: {
      borderRadius: "15%"
    }
  })
);

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.root}>
        <Paper className={classes.paperelement} elevation={5}>
          <Iconlight />
        </Paper>
        <Paper className={classes.paperelement} elevation={5}>
          <IconTV />
        </Paper>
      </span>
      <span className={classes.root} style={{ marginTop: 0 }}>
        <Paper className={classes.paperelement} elevation={5}></Paper>
        <Paper className={classes.paperelement} elevation={5}></Paper>
      </span>
      <span className={classes.root} style={{ marginTop: 0 }}>
        <Paper className={classes.paperelement} elevation={5}></Paper>
        <Paper className={classes.paperelement} elevation={5}></Paper>
      </span>
      <span className={classes.root} style={{ marginTop: 0 }}>
        <Paper className={classes.paperelement} elevation={5}></Paper>
        <Paper className={classes.paperelement} elevation={5}></Paper>
      </span>
    </div>
  );
}