import React from "react";
import TvIcon from "@material-ui/icons/Tv";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary
    },
    icondelite: {
      color: "#0d47a1",
      padding: "10%"
    }
  })
);

export default function IconTV() {
  const classes = useStyles();

  return (
    <Container>
      <TvIcon className={classes.icondelite} />
      <Typography align="center" variant="h4" color="primary">
        Smart Tv
      </Typography>
    </Container>
  );
}
