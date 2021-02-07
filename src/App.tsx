/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiComponentSamples from "../src/MuiComponentSamples";

import {
  AppBar,
  createMuiTheme,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      textTransform: "none",
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  const [appTheme, setAppTheme] = useState("night");
  const theme = appTheme === "dark" ? { ...darkTheme } : { ...lightTheme };

  function onChange() {
    setAppTheme(appTheme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="body2">Dark Mode</Typography>
            <Switch onChange={onChange} />
          </Toolbar>
        </AppBar>
        <MuiComponentSamples />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
