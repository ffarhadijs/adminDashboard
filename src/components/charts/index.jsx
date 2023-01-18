import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { projectsData } from "../../data/data";
import { usersData } from "../../data/data";
import { emailsData } from "../../data/data";
import { tokens } from "../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

const Charts = ({ type, title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const barOption = {
    tooltip: {},
    xAxis: {
      data: emailsData.map((item) => item.year),
    },
    yAxis: {},
    series: [
      {
        name: "Emails",
        data: emailsData.map((item) => item.emails),
        type: "bar",
        color: "#FFB6C1",
      },
    ],
  };
  const pieOption = {
    color: ["#ffb6c1", "#90ee90", "#ffa07a", "#55ACEE", "#ffa726"],
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Users",
        type: "pie",
        radius: "50%",
        data: usersData.map((item) => ({ value: item.users, name: item.year })),
        emphasis: {
          label: false,
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: true,
          position: "inside",
        },
      },
    ],
  };
  const lineOption = {
    tooltip: {},
    xAxis: {
      data: projectsData.map((item) => item.year),
    },
    yAxis: {},
    series: [
      {
        name: "Projects",
        data: projectsData.map((item) => item.projects),
        type: "line",
        color: "#90ee90",
      },
    ],
  };
  const option = (type) => {
    if (type === "bar") {
      return barOption;
    } else if (type === "pie") {
      return pieOption;
    } else if (type === "line") {
      return lineOption;
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: colors.primary[600],
        height: "auto",
        padding: "15px 5px 15px 15px",
      }}
    >
      <Stack
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems={"start"}
      >
        <Box>
          <Typography variant="subtitle" component="div">
            {title}
          </Typography>
          <Typography variant="caption" color={colors.grey[200]}>
            Calculated in last 5 years
          </Typography>
        </Box>
        <IconButton p={0} onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Stack>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem selected onClick={handleClose}>
          Last 5 year
        </MenuItem>
        <MenuItem onClick={handleClose}>
          This year
        </MenuItem>
        <MenuItem onClick={handleClose}>
        This month
        </MenuItem>
      </Menu>
      <ReactEcharts option={option(type)} />
    </Paper>
  );
};
export default Charts;
