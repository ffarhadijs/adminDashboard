import { Box, Grid } from "@mui/material";
import React from "react";
import FooterOne from "../components/FooterElements/FooterOne";
import FooterTwo from "../components/FooterElements/FooterTwo";
import FooterThree from "../components/FooterElements/FooterThree";

const Footer = () => {
  return (
    <Grid container rowGap={2} p={2}>
      <Grid item xs={12}>
        <FooterOne />
      </Grid>
      <Grid item xs={12}>
        <FooterTwo />
      </Grid>
      <Grid item xs={12}>
        <FooterThree />
      </Grid>
    </Grid>
  );
};

export default Footer;
