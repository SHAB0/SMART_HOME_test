import React from "react";
import Grid from "@material-ui/core/Grid";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary
    },
    icondelite: {
      color: "#0d47a1",
      padding: "10%"
    },
    centrtext: {
      display: "inline-grid"
    }
  })
);

export default function Iconlight() {
  const classes = useStyles();

  return (
    <Container>
      <WbIncandescentIcon className={classes.icondelite} />
      <Typography align="center" variant="h4" color="primary">
        Light
      </Typography>
    </Container>
  );
}
