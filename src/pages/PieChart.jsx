import { Box } from "@mui/material";
import React from "react";
import Pie from "../components/Charts/Pie";

function PieChart() {
  return (
    <Box p={4} style={{ width: "100%" }}>
      <Pie />
    </Box>
  );
}

export default PieChart;
