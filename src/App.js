import "./styles.css";
import Variants from "./test";

import { AppBar, Container, Toolbar } from "@material-ui/core";

export default function App() {
  return (
    <>
      <Container fixed>
        <AppBar position="fixed">
          <Toolbar></Toolbar>
        </AppBar>
        <Variants />
      </Container>
    </>
  );
}
