import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { projectsData } from "../../data/data";
import { tokens } from "../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dataType, setDataType] = useState("fiveYear");
  const open = Boolean(anchorEl);

  const fiveYearsDate = projectsData?.fiveYear?.map((item) => item.date);
  const oneYearDate = projectsData?.oneYear?.map((item) => item.date);
  const oneMonthDate = projectsData?.oneMonth?.map((item) => item.date);

  const fiveYearsData = projectsData?.fiveYear?.map((item) => item.projects);
  const oneYearData = projectsData?.oneYear?.map((item) => item.projects);
  const oneMonthData = projectsData?.oneMonth?.map((item) => item.projects);

  const lineOption = {
    tooltip: {},
    xAxis: {
      data:
        dataType === "fiveYear"
          ? fiveYearsDate
          : dataType === "oneYear"
          ? oneYearDate
          : dataType === "oneMonth" && oneMonthDate,
    },
    yAxis: {},
    series: [
      {
        name: "Projects",
        data:
          dataType === "fiveYear"
            ? fiveYearsData
            : dataType === "oneYear"
            ? oneYearData
            : dataType === "oneMonth" && oneMonthData,
        type: "line",
        color: "#90ee90",
      },
    ],
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    setDataType(type);
    setAnchorEl(null);
  };
  return (
    <Box style={{ backgroundColor: colors.primary[600], width: "100%" }} p={2}>
      <Stack
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems={"start"}
      >
        <Box>
          <Typography variant="subtitle" component="div">
            Projects monitor
          </Typography>
          <Typography variant="caption" color={colors.grey[200]}>
            Calculated in{" "}
            {dataType === "fiveYear"
              ? "last 5 years"
              : dataType === "oneYear"
              ? "last 1 year"
              : "last 1 month"}
          </Typography>
        </Box>
        <IconButton p={0} onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Stack>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem selected onClick={() => handleClose("fiveYear")}>
          Last 5 year
        </MenuItem>
        <MenuItem onClick={() => handleClose("oneYear")}>This year</MenuItem>
        <MenuItem onClick={() => handleClose("oneMonth")}>This month</MenuItem>
      </Menu>
      <ReactEcharts option={lineOption} style={{ height: "400px" }} />
    </Box>
  );
};

export default Line;
