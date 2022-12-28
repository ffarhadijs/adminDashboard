import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MenuItems from "./menuItems";
import logo from "../../assets/logo.png";
const SideBar = ({ setOpenDrawer }) => {
  return (
    <Box sx={{ height: "100%" }} width={"250px"}>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{
          height: "60px",
          width: "100%",
          padding: "0 16px",
          borderBottom: "0.75px solid grey",
        }}
      >
        <img src={logo} style={{ width: "30px" }} />
        <Typography variant="h6"> Admin Panel</Typography>
      </Stack>
      <MenuItems
        setOpenDrawer={setOpenDrawer}
      />
    </Box>
  );
};

export default SideBar;
