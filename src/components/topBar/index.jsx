import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  styled,
  TextField,
  Toolbar,
  Typography,
  useTheme,
  Badge,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { tokens } from "../../theme";
import avatar from "../../assets/avatar.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import SideBar from "../sideBar";
import AvatarMenu from "./avatarMenu";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openMenu, setOpenMenu] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const open = Boolean(openMenu);
  const localValues = JSON.parse(localStorage.getItem("profileData"));

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: colors.primary[100],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.primary[200],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colors.primary[300],
      },
      "&:hover fieldset": {
        borderColor: colors.primary[200],
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.primary[100],
      },
    },
  });

  return (
    <AppBar
      color="transparent"
      position="static"
      sx={{ width: "100%", height: "60px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display={"flex"} flexDirection="row" alignItems="center">
          <IconButton
            onClick={() => setOpenDrawer(true)}
            size="large"
            edge="start"
            sx={{ display: { sm: "inline-block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dashboard
          </Typography>
          <Drawer
            anchor={"left"}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            PaperProps={{
              sx: {
                backgroundColor: colors.primary[600],
              },
            }}
          >
            <SideBar setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
          </Drawer>
        </Box>
        <Box display={"flex"} flexDirection="row" alignItems="center">
          <CssTextField
            size="small"
            sx={{ m: 1 }}
            label={"search..."}
            variant="outlined"
          />
          <IconButton>
            <Badge
              badgeContent={4}
              color="warning"
              variant="standard"
              sx={{ color: "white" }}
            >
              <NotificationsIcon color="action" />
            </Badge>
          </IconButton>
          <IconButton onClick={(e) => setOpenMenu(e.currentTarget)}>
            <Badge
              overlap="circular"
              color={"success"}
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar alt="user profile" src={localValues?.avatar ? localValues.avatar : avatar} />
            </Badge>
          </IconButton>
        </Box>
        <AvatarMenu open={open} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
