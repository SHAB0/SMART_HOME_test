import React, { useState, useEffect } from "react";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

import { firebase } from "../firebase";
const db = firebase.database();
const ref = db.ref("LED2");
let led1;
ref.on(
  "value",
  (snapshot) => {
    //console.log(snapshot.val());
    led1 = snapshot.val();
  },
  (errorObject) => {
    //console.log("the read failed: " + errorObject.name);
  }
);

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
  //console.log(led1);
  const [value, setValue] = useState();
  setInterval(() => {
    setValue(led1);
  }, 1000);
  useEffect(() => {
    led1 = value;
  });

  const classes = useStyles();
  return (
    <Container>
      <WbIncandescentIcon className={classes.icondelite} />
      <Typography align="center" variant="h4" color="primary">
        {led1}
      </Typography>
    </Container>
  );
}
