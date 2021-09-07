import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        backgroundColor: "#eeeeee"
      }
    }
  })
);

export default function BasicTextFields() {
  const handleChange = (e) => {
    const bodyEl = document.getElementById("body-element");
    const pass = "Pass";
    console.log(e.target.value);
    if (e.target.value == pass) {
      bodyEl.style.display = "block";
      document.getElementById("form-basic").style.display = "none";
      document.getElementById("app-bar-id").style.justifyContent = "center";
    }
  };
  const classes = useStyles();
  return (
    <form id="form-basic" className={classes.root} noValidate autoComplete="on">
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Pass"
        variant="filled"
      />
    </form>
  );
}
