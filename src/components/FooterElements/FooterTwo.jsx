import {
  Box,
  Divider,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

const links = [
  { name: "Home" },
  { name: "Shop" },
  { name: "Blog" },
  { name: "Service" },
  { name: "About us" },
  { name: "Contact" },
];

const icons = [
  { name: <FaFacebookF /> },
  { name: <FaTwitter /> },
  { name: <FaTelegramPlane /> },
  { name: <FaLinkedinIn /> },
];
const FooterTwo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      elevation={3}
      sx={{ padding: "20px", backgroundColor: colors.primary[700] }}
    >
      <Stack
        flexDirection={"column"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h6" component="span">
          Company{" "}
          <Typography variant="body1" component="span">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Typography>
        <Box marginY={"20px"}>
          {links.map((item, index) => (
            <Link
              key={index}
              href="#"
              color="inherit"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#4cceac",
                  transition: "color 0.5s",
                },
                transition: "color 0.5s",
                fontSize: "14px",
                display: "inline-block",
                width: "max-content",
                marginX: "10px",
              }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
        <Box>
          {icons.map((icon, index) => (
            <IconButton
              key={index}
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "#0275d8",
                  transition: "background-color 0.5s",
                },
                transition: "background-color 0.5s",
              }}
            >
              {icon.name}
            </IconButton>
          ))}
        </Box>
      </Stack>
      <Divider sx={{ marginY: "10px" }} />
      <Stack flexDirection="row" justifyContent={"space-between"}>
        <Typography variant="subtitle2" color={"gray"}>
          © Copyright 2023. All rights reserved.
        </Typography>
        <Typography variant="body1">Company</Typography>
      </Stack>
    </Paper>
  );
};

export default FooterTwo;
