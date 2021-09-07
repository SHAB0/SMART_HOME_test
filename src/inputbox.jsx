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
  const [user, setUser] = useState();
  const handleChange = () => {
    setUser(document.getElementById("outlined-basic").value);
    const bodyEl = document.getElementById("body-element");
    const pass = "pass";
    console.log(user);
    if (user == pass) {
      bodyEl.style.display = "block";
      document.getElementById("outlined-basic").value = "";
    }
  };
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Pass"
        variant="filled"
      />
    </form>
  );
}
