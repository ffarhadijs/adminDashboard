import { Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";

const Layout = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.primary[600],
          height: "auto",
          minHeight: "100vh",
          display:{xs:"none",sm:"none",md:"block"},
          zIndex:"1001"
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
            boxShadow:"rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
            width: "100%",
            height: "60px",
            zIndex:"1000"
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
