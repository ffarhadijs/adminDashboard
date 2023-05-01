import { Box } from "@mui/material";
import React from "react";
import Line from "../components/Charts/Line";

function LineChart() {
  return (
    <Box p={4} style={{width:"100%"}}>
        <Line/>
    </Box>
  );
}

export default LineChart;
