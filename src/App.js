import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Box className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route path="/pages/profile" element={<Profile />} />
              <Route path="/pages/settings" element={<Settings />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
}

export default App;
