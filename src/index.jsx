import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";

import theme from "@styles/theme";
import App from "@components/App";

import "./globalStyles.scss";

const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  MOUNT_NODE
);
