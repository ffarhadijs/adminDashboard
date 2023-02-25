import { Button, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { inboxLabels, inboxSideBar } from "../../data/data";
import { Link, useLocation } from "react-router-dom";
const InboxSideBar = () => {
  const location = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack
      flexDirection={"column"}
      alignItems="start"
      justifyContent={"start"}
      sx={{
        width: "150px",
        height: "auto",
        minHeight: "100vh",
        backgroundColor: colors.primary[700],
        padding: "20px",
      }}
    >
      <Link
        to="/apps/emailbox/compose"
        style={{
          border: "1px solid",
          borderColor: "rgb(64, 64, 64)",
          padding: "3px 10px",
          borderRadius: "3px",
          marginBottom: "10px",
        }}
      >
        compose
      </Link>
      {inboxSideBar.map((item) => (
        <Link
          key={item.id}
          to={`/${item.slug}`}
          style={{
            fontSize: "14px",
            display: "block",
            width: "100%",
            backgroundColor: location.pathname.includes(item.slug) && "#4cceac",
            padding: "5px",
            marginTop: "5px",
            borderRadius: "7px",
          }}
        >
          {item.title}
        </Link>
      ))}
      <Typography variant="subtitle1" sx={{ padding: "30px 0 5px 0" }}>
        Labels
      </Typography>
      {inboxLabels.map((item) => (
        <Link
          key={item.id}
          to={`/${item.slug}`}
          style={{
            fontSize: "14px",
            display: "block",
            width: "100%",
            backgroundColor: location.pathname.includes(item.slug) && "#4cceac",
            padding: "5px",
            marginTop: "5px",
            borderRadius: "7px",
          }}
        >
          {item.title}
        </Link>
      ))}
    </Stack>
  );
};

export default InboxSideBar;
