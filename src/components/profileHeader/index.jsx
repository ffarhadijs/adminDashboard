import {
    FaFacebookF,
    FaTwitter,
    FaTelegramPlane,
    FaLinkedinIn,
  } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import avatar from "../../assets/avatar.jpg";
import { Avatar, Box, Stack, Typography, Badge, useTheme } from "@mui/material";
import { tokens } from "../../theme";



const ProfileHeader = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    
  return (
    <Box width={"100%"} height={"240px"} bgcolor={"black"} p={"24px"}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid xs={12} sm={8}>
          <Stack
            flexDirection={"row"}
            alignItems="start"
            columnGap={"20px"}
            p={"20px"}
            flexWrap="wrap"
          >
            <Badge
              sx={{
                display: { xs: "none", sm: "inline-block" },
              }}
              overlap="circular"
              color={"success"}
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  display: { xs: "none", sm: "inline-block" },
                }}
                src={avatar}
                alt={"avatar"}
              />
            </Badge>
            <Stack flexDirection={"column"}>
              <Typography variant={"h5"}>Farhad Farhadi</Typography>
              <Stack
                flexDirection={"row"}
                columnGap={"10px"}
                alignItems={"end"}
              >
                <Typography
                  component="span"
                  variant="subtitle2"
                  color={colors.grey[400]}
                  fontWeight={"bold"}
                >
                  Frontend developer
                </Typography>

                <Typography
                  component={"span"}
                  variant="subtitle2"
                  color={colors.grey[400]}
                  fontWeight={"bold"}
                >
                  <LocationOnIcon fontSize={"small"} />
                  Iran,Urmia
                </Typography>
              </Stack>
              <Stack
                mt={"20px"}
                flexDirection={"row"}
                columnGap={"10px"}
                alignItems={"center"}
              >
                <Avatar
                  sx={{
                    backgroundColor: colors.primary[500],
                    color: "white",
                    width: "30px",
                    height: "30px",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      backgroundColor: "#3c589a",
                    },
                  }}
                >
                  <FaFacebookF size={"0.8em"} />
                </Avatar>
                <Avatar
                  sx={{
                    backgroundColor: colors.primary[500],
                    color: "white",
                    width: "30px",
                    height: "30px",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      backgroundColor: "#55acee",
                    },
                  }}
                >
                  <FaTwitter size={"0.8em"} />
                </Avatar>
                <Avatar
                  sx={{
                    backgroundColor: colors.primary[500],
                    color: "white",
                    width: "30px",
                    height: "30px",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      backgroundColor: "#27a0df",
                    },
                  }}
                >
                  <FaTelegramPlane size={"0.8em"} />
                </Avatar>
                <Avatar
                  sx={{
                    backgroundColor: colors.primary[500],
                    color: "white",
                    width: "30px",
                    height: "30px",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      backgroundColor: "#0077b5",
                    },
                  }}
                >
                  <FaLinkedinIn size={"0.8em"} />
                </Avatar>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={12} sm={4} p={"0 28px"}>
          <Typography variant="h6" color={"white"}>
            I am feeling good!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProfileHeader