import "./styles.css";
import Variants from "./test";
import BasicTextFields from "./inputbox";

import { AppBar, Container, Toolbar } from "@material-ui/core";

export default function App() {
  return (
    <>
      <Container fixed>
        <AppBar position="fixed">
          <Toolbar>
            <BasicTextFields />
          </Toolbar>
        </AppBar>
        <Variants />
      </Container>
    </>
  );
}
