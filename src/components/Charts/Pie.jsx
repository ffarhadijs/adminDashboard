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
import { usersData } from "../../data/data";
import { tokens } from "../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dataType, setDataType] = useState("fiveYear");
  const open = Boolean(anchorEl);

  const fiveYearsData = usersData?.fiveYear?.map((item) => ({
    value: item.users,
    name: item.date,
  }));
  const oneYearData = usersData?.oneYear?.map((item) => ({
    value: item.users,
    name: item.date,
  }));
  const oneMonthData = usersData?.oneMonth?.map((item) => ({
    value: item.users,
    name: item.date,
  }));

  const pieOption = {
    color: [
      "#5470c6",
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
      "#ea7ccc",
      "#fc8322",
      "#2a20b4",
      "#bc5bbc",
    ],
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Users",
        type: "pie",
        radius: "50%",
        data:
          dataType === "fiveYears"
            ? fiveYearsData
            : dataType === "oneYear"
            ? oneYearData
            : oneMonthData,
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
          position: "outside",
          backgroundColor: "transparent",
          color: colors.grey[100],
          fontSize: "13px",
        },
      },
    ],
  };

  const barOption = {
    color: ["#ffb6c1", "#90ee90", "#ffa07a", "#55ACEE", "#ffa726"],
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Users",
        type: "pie",
        radius: "50%",
        data: usersData.fiveYear.map((item) => ({
          value: item.users,
          name: item.year,
        })),
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
            Users monitor
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
      <ReactEcharts option={pieOption} style={{ height: "400px" }} />
    </Box>
  );
};

export default Pie;
