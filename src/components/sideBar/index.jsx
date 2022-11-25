import {
  Box,
  List,
  useTheme,
} from "@mui/material";
import React from "react";
import { menuItems } from "../../data/data";
import { useState } from "react";
import MenuItems from "./menuItems";

const SideBar = () => {
  return (
    <Box>
      <List component={"nav"} sx={{ width: "100%", height: "auto" }}>
        {menuItems.map((item, index) => (
          <MenuItems item={item} index={index}/>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
