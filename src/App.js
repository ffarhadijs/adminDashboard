import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
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
import ReactEmail from "./pages/ReactEmail";
import AngularEmail from "./pages/AngularEmail";
import VueEmail from "./pages/VueEmail";
import { QueryClient, QueryClientProvider } from "react-query";
import { EmailDetails } from "./pages/EmailDetails";
import ComposeEmail from "./pages/ComposeEmail";
import Todos from "./pages/Todos";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";
import Faq from "./pages/Faq";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import LineChart from "./pages/LineChart";
import PieChart from "./pages/PieChart";
import BarChart from "./pages/BarChart";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  const [theme, colorMode] = useMode();

  return (
    <Box className="app">
      <QueryClientProvider client={queryClient}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Routes>
                <Route path="/pages/profile" element={<Profile />} />
                <Route path="/pages/settings" element={<Settings />} />
                <Route path="/pages/faq" element={<Faq />} />
                <Route path="/" element={<Home />} />
                <Route path="/apps/emailbox" element={<Inbox />} />
                <Route path="/apps/emailbox/inbox" element={<InboxEmails />} />
                <Route path="/apps/emailbox/sent" element={<SentEmails />} />
                <Route path="/apps/emailbox/trash" element={<TrashEmails />} />
                <Route path="/apps/emailbox/react" element={<ReactEmail />} />
                <Route
                  path="/apps/emailbox/angular"
                  element={<AngularEmail />}
                />
                <Route path="/apps/emailbox/vue" element={<VueEmail />} />
                <Route
                  path="/apps/emailbox/:category/:id"
                  element={<EmailDetails />}
                />
                <Route
                  path="/apps/emailbox/compose"
                  element={<ComposeEmail />}
                />
                <Route path="/apps/todo" element={<Todos />} />
                <Route path="/apps/note" element={<Notes />} />
                <Route path="/apps/note/:id" element={<NoteDetail />} />
                <Route path="layouts/header" element={<Header />} />
                <Route path="layouts/footer" element={<Footer />} />
                <Route path="charts/line" element={<LineChart />} />
                <Route path="charts/pie" element={<PieChart />} />
                <Route path="charts/bar" element={<BarChart />} />

              </Routes>
            </Layout>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
