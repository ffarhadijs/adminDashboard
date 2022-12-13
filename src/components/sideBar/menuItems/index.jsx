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

const MenuItems = () => {
  const location = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState({});
  const clickHandler = (index) => () => {
    setOpen((state) => ({
      [index]: !state[index],
    }));
  };
  return (
    <List component={"nav"} sx={{ width: "100%", height: "auto" }}>
      {menuItems.map((item, index) => (
        <Box key={item.id}>
          {item.slug && (
            <Link to={item.slug}>
              <ListItemButton>
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
              sx={{ backgroundColor: open[index] && colors.primary[400] }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {open[index] === true ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          )}
          {item.subItems?.map((subItem) => (
            <Collapse
              key={subItem.id}
              in={open[index]}
              timeout="auto"
              unmountOnExit
              sx={{ backgroundColor: colors.blueAccent[900] }}
            >
              <Link to={subItem.slug} key={subItem.id}>
                <ListItemButton
                  sx={{
                    backgroundColor:
                      location.pathname == subItem.slug && colors.primary[300],
                    padding: "8px 0 8px 75px",
                  }}
                >
                  <ListItemText secondary={subItem.title} />
                </ListItemButton>
              </Link>
            </Collapse>
          ))}
        </Box>
      ))}
    </List>
  );
};

export default MenuItems;
