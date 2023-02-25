import {
  Avatar,
  Badge,
  Box,
  Divider,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import TabPanel from "../tabPanel";
import Friends from "./friends";
import ProfileData from "./profileData";
import Grid from "@mui/material/Unstable_Grid2";
import { users } from "../../data/data";

export default function ProfileBody() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container xs={12} sx={{ width: "100%" }}>
      <Grid xs={12}>
        <Stack
          flexDirection={{ xs: "column-reverse", sm: "row" }}
          justifyContent="space-between"
          alignItems={"center"}
          sx={{ backgroundColor: colors.primary[600], padding: "20px" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Friends" />
            <Tab label="Profile" />
          </Tabs>
          <Stack
            flexDirection={"row"}
            alignItems="center"
            flexWrap={"nowrap"}
            gap={2}
          >
            <Box textAlign={"center"}>
              <Typography variant="h5">2K</Typography>
              <Typography
                variant="subtitle2"
                color={colors.grey[400]}
                fontSize={"small"}
              >
                Followers
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box textAlign={"center"}>
              <Typography variant="h5">250</Typography>
              <Typography
                variant="subtitle2"
                color={colors.grey[400]}
                fontSize={"small"}
              >
                Following
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box textAlign={"center"}>
              <Typography variant="h5">89</Typography>
              <Typography
                variant="subtitle2"
                color={colors.grey[400]}
                fontSize={"small"}
              >
                Activities
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12} sm={8}>
        <TabPanel value={value} index={0}>
          <Friends />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProfileData />
        </TabPanel>
      </Grid>
      <Grid xs={12} sm={4} p={"24px"}>
        <Paper
          elevation={4}
          sx={{
            backgroundColor: colors.primary[600],
            height: "auto",
            padding: "0px 10px",
          }}
        >
          <Typography variant="body1" padding={"10px 0px"}>
            Followers
          </Typography>
          <Divider />
          {users.slice(0, 4).map((user) => (
            <Stack
              key={user.id}
              padding={"10px 0"}
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
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
