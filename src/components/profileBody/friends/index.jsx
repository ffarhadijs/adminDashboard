import {
  Avatar,
  Badge,
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { users } from "../../../data/data";
import { tokens } from "../../../theme";

export default function Friends() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid xs={6} sm={4} key={user.id}>
          <Paper
            elevation={4}
            sx={{ padding: "10px", backgroundColor: colors.primary[600] }}
          >
            <Stack
              flexDirection={"row"}
              alignItems="center"
              justifyContent={"start"}
            >
              <Box width="auto" height="100%" p="0 5px">
                <Badge
                  overlap="circular"
                  color={user.color}
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar alt={user.name} src={user.avatar} />
                </Badge>
              </Box>
              <Grid xs={12} p={0}>
                <Typography
                  variant={"subtitle1"}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  variant={"subtitle2"}
                  fontSize={"small"}
                  color={colors.grey[400]}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {user.job}
                </Typography>
              </Grid>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
