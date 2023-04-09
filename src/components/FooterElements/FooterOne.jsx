import {
  Box,
  Button,
  Grid,
  Link,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { List } from "echarts";
import { tokens } from "../../theme";
const FooterOne = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const Apps = [
    { name: "Project" },
    { name: "Inbox" },
    { name: "Calendar" },
    { name: "Contact" },
    { name: "Note" },
    { name: "Todo" },
  ];
  const Blog = [
    { name: "Life style" },
    { name: "Fashion" },
    { name: "Travel" },
    { name: "Entertainment" },
    { name: "Local" },
  ];
  const About = [
    { name: "Company" },
    { name: "Services" },
    { name: "Contact" },
    { name: "Team" },
    { name: "Support" },
  ];
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
    <Paper
      elevation={3}
      sx={{ padding: "20px", backgroundColor: colors.primary[700] }}
    >
      <Grid container spacing={"20px"}>
        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={logo} style={{ width: "25px", height: "25px" }} />
            <Typography variant="body1" fontWeight={700} fontSize={"18px"}>
              Logo
            </Typography>
          </Box>
          <Typography variant="body2" pt={"20px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptas inventore sit eos cupiditate vero ab facere sint quasi
            atque id animi explicabo delectus repellendus numquam, accusantium,
            cum, totam facilis?
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6" fontSize={"16px"} pb={"20px"}>
            APPS
          </Typography>
          {Apps.map((item, index) => (
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
                marginBottom: "10px",
                display: "inline-block",
                width: "max-content",
              }}
            >
              {item.name}
            </Link>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6" fontSize={"16px"} pb={"20px"}>
            BLOG
          </Typography>
          {Blog.map((item, index) => (
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
                marginBottom: "10px",
                display: "inline-block",
                width: "max-content",
              }}
            >
              {item.name}
            </Link>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6" fontSize={"16px"} pb={"20px"}>
            ABOUT
          </Typography>
          {About.map((item, index) => (
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
                marginBottom: "10px",
                display: "inline-block",
                width: "max-content",
              }}
            >
              {item.name}
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontSize={"16px"} pb={"20px"}>
            SUBSCRIBE
          </Typography>
          <Typography variant="body2" mb={"20px"}>
            Do not want to miss our newsletter?
          </Typography>
          <CssTextField variant="outlined" label="Your email" />
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "white", marginTop: "20px" }}
          >
            {" "}
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FooterOne;
