import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>app</Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
