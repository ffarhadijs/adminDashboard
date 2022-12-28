import { Box, useTheme } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import SideBar from "../sideBar";
import TopBar from "../topBar";

const Layout = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.primary[600],
          height: "100%",
          minHeight:"100vh",
          display:{xs:"none",sm:"none",md:"block"}
        }}
      >
        <SideBar />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            backgroundColor: colors.primary[700],
            width: "100%",
            height: "60px",
          }}
        >
          <TopBar />
        </Box>
        <Box sx={{ width: "100%", height: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
