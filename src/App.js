import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Inbox from "./pages/Inbox";
import InboxEmails from "./pages/InboxEmails";
import SentEmails from "./pages/SentEmails";
import TrashEmails from "./pages/TrashEmails";
import InboxLayout from "./components/inboxLayout";
import InboxReact from "./components/inboxReact";
import InboxAngular from "./components/inboxAngular";
import ReactEmail from "./pages/ReactEmail";
import AngularEmail from "./pages/AngularEmail";
import VueEmail from "./pages/VueEmail";

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
              <Route path="/apps/inbox" element={<Inbox />} />
              <Route path="/apps/inbox/inbox" element={<InboxEmails />} />
              <Route path="/apps/inbox/sent" element={<SentEmails />} />
              <Route path="/apps/inbox/trash" element={<TrashEmails />} />
              <Route path="/apps/inbox/react" element={<ReactEmail />} />
              <Route path="/apps/inbox/angular" element={<AngularEmail />} />
              <Route path="/apps/inbox/vue" element={<VueEmail />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
}

export default App;
