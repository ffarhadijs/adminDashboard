import {
  Box,
  Divider,
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
      <Grid xs={12} sm={8} >
        <TabPanel value={value} index={0}>
          <Friends />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProfileData />
        </TabPanel>
      </Grid>
      <Grid xs={12} sm={4} p={"24px"}>
        <Box sx={{ backgroundColor: "white", height: "200px" }}></Box>
      </Grid>
    </Grid>
  );
}
