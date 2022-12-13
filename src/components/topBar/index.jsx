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
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { tokens } from "../../theme";
import avatar from "../../assets/avatar.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import { Logout, Settings } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import HelpIcon from "@mui/icons-material/Help";
const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const clickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <IconButton size="large" edge="start" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="body"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dashboard
          </Typography>
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
          <IconButton onClick={clickHandler}>
            <Badge
              color={"success"}
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar alt="user profile" src={avatar} />
            </Badge>
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              color: colors.primary[900],
              bgcolor: colors.primary[300],
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                color: colors.primary[900],
                bgcolor: colors.primary[200],
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                color: colors.primary[900],
                bgcolor: colors.primary[300],
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            Inbox
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            Need help?
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
