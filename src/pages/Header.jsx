import { Grid } from "@mui/material";
import React from "react";
import HeaderOne from "../components/HeaderElements/HeaderOne";
import HeaderTwo from "../components/HeaderElements/HeaderTwo";
import HeaderThree from "../components/HeaderElements/HeaderThree";

const Header = () => {
  return (
    <Grid container rowGap={2} p={2}>
      <Grid item xs={12}>
        <HeaderOne />
      </Grid>
      <Grid item xs={12}>
        <HeaderTwo />
      </Grid>
      <Grid xs={12} item>
        <HeaderThree />
      </Grid>
    </Grid>
  );
};

export default Header;
