import "./styles.css";
import Variants from "./test";
import BasicTextFields from "./inputbox";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { firebase } from "./firebase";
const db = firebase.database();

const ref = db.ref("LED2");
ref.on(
  "value",
  (snapshot) => {
    console.log(snapshot.val());
  },
  (errorObject) => {
    console.log("the read failed: " + errorObject.name);
  }
);

export default function App() {
  return (
    <>
      <Container fixed>
        <AppBar position="fixed" color="transparent">
          <Toolbar id="app-bar-id">
            <BasicTextFields />
            <Typography align="center" variant="h3" color="primary">
              Smart Home
            </Typography>
          </Toolbar>
        </AppBar>
        <Variants />
      </Container>
    </>
  );
}
