import React from "react";
import Grid from "@material-ui/core/Grid";
import TvIcon from "@material-ui/icons/Tv";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary
    },
    icondelite: {
      color: "#0d47a1",
      padding: "2vw"
    }
  })
);

export default function IconTV() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <TvIcon className={classes.icondelite} />
      </Grid>
    </Grid>
  );
}
