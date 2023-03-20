import { Box, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Fragment } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import avatar1 from "../../assets/avatar.jpg";
import avatar2 from "../../assets/user (1).jpg";
import avatar3 from "../../assets/user (2).jpg";
import avatar4 from "../../assets/user (3).jpg";
import EmailIcon from "@mui/icons-material/Email";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const experts = [
  { id: 1, name: "Chris Fox", job: "Designer, Blogger", avatar: avatar1 },
  { id: 2, name: "Mogen Polish", job: "Writter, Mag Editor", avatar: avatar2 },
  {
    id: 3,
    name: "Joge Lucky",
    job: "Art director, Movie Cut",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Folisise Chosielie",
    job: "Musician, Player",
    avatar: avatar4,
  },
];
export default function FaqPanel() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="body1"
        fontWeight={500}
        fontSize={18}
        marginTop={1.5}
      >
        Ask experts
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: colors.primary[700],
          marginY: 1.5,
        }}
      >
        {experts.map((item, index) => (
          <Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.avatar} />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.job} />
            </ListItem>
            <Divider
              variant="inset"
              component="li"
              sx={{ display: index === experts.length - 1 && "none" }}
            />
          </Fragment>
        ))}
      </List>
      <Box>
        <Stack
          flexDirection={"row"}
          alignItems="center"
          justifyContent={"start"}
          columnGap={2}
        >
          <EmailIcon />
          <Typography variant="subtitle1">contact@company.com</Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems="center"
          justifyContent={"start"}
          columnGap={2}
          marginY={1.5}
        >
          <LocalPhoneIcon />
          <Typography variant="subtitle1">(432) 999 000</Typography>
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems="center"
          justifyContent={"start"}
          columnGap={2}
        >
          <AccessAlarmIcon />
          <Typography variant="subtitle1">Mon-Fri 9:00 - 16:00</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
