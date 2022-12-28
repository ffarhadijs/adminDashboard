import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Collapse,
  List,
} from "@mui/material";
import { tokens } from "../../../theme";
import { menuItems } from "../../../data/data.js";

const MenuItems = ({ setOpenDrawer }) => {
  const location = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openCollapse, setOpenCollapse] = useState({});
  const clickHandler = (index) => () => {
    setOpenCollapse((state) => ({
      [index]: !state[index],
    }));
  };
  return (
    <List component={"nav"} sx={{ width: "100%", height: "auto" }}>
      {menuItems.map((item, index) => (
        <Box key={item.id}>
          {item.slug && (
            <Link to={item.slug}>
              <ListItemButton
                sx={{
                  backgroundColor:
                    location.pathname == item.slug && colors.primary[300],
                }}
                onClick={()=>setOpenDrawer(false)}
              >
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          )}
          {item.subItems && (
            <ListItemButton
              onClick={clickHandler(index)}
              sx={{
                backgroundColor: openCollapse[index] && colors.primary[400],
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {openCollapse[index] || location.pathname.includes(item.title) ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          )}
          <Collapse
            in={openCollapse[index] || location.pathname.includes(item.title)}
            timeout="auto"
            unmountOnExit
            sx={{ backgroundColor: colors.blueAccent[900] }}
          >
            {item.subItems?.map((subItem) => (
              <Link to={subItem.slug} key={subItem.id} >
                <ListItemButton
                  sx={{
                    backgroundColor:
                      location.pathname == subItem.slug && colors.primary[300],
                    padding: "8px 0 8px 75px",
                  }}
                  onClick={()=>setOpenDrawer(false)}
                >
                  <ListItemText secondary={subItem.title} />
                </ListItemButton>
              </Link>
            ))}
          </Collapse>
        </Box>
      ))}
    </List>
  );
};

export default MenuItems;
