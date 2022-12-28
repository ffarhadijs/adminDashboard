import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  useTheme,
  ListItemText,
  MenuList,
  Box,
} from "@mui/material";
import { tokens } from "../../../theme";
import { avatarMenuItems } from "../../../data/data";

const AvatarMenu = ({ open, openMenu, setOpenMenu }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Menu
      anchorEl={openMenu}
      id="account-menu"
      open={open}
      onClose={() => setOpenMenu(null)}
      onClick={() => setOpenMenu(null)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          color: colors.grey[100],
          bgcolor: colors.primary[800],
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
            color: colors.grey[100],
            bgcolor: colors.primary[800],
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            color: colors.grey[100],
            bgcolor: colors.primary[800],
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuList>
        {avatarMenuItems.map((item) => (
          <Box key={item.id}>
            <MenuItem>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </MenuItem>
            {item.id === 3 && <Divider />}
          </Box>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
