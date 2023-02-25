import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader"
import ProfileBody from "../components/ProfileBody/ProfileBody";

export default function Profile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <ProfileHeader/>
      <ProfileBody/>
    </Box>
  );
}
