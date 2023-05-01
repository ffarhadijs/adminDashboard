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
import { emailsData } from "../../data/data";
import { tokens } from "../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dataType, setDataType] = useState("fiveYear");
  const open = Boolean(anchorEl);

  const fiveYearsDate = emailsData?.fiveYear?.map((item) => item.date);
  const oneYearDate = emailsData?.oneYear?.map((item) => item.date);
  const oneMonthDate = emailsData?.oneMonth?.map((item) => item.date);

  const fiveYearsData = emailsData?.fiveYear?.map((item) => item.emails);
  const oneYearData = emailsData?.oneYear?.map((item) => item.emails);
  const oneMonthData = emailsData?.oneMonth?.map((item) => item.emails);

  const barOption = {
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
        name: "Emails",
        data:
          dataType === "fiveYear"
            ? fiveYearsData
            : dataType === "oneYear"
            ? oneYearData
            : dataType === "oneMonth" && oneMonthData,
        type: "bar",
        color: "#FFB6C1",
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
            Emails monitor
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
      <ReactEcharts option={barOption} style={{ height: "400px" }} />
    </Box>
  );
};

export default Bar;
