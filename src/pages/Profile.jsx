import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProfileHeader from "../components/profileHeader"
import ProfileBody from "../components/profileBody";

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
