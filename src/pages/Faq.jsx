import { Box, Grid } from "@mui/material";
import FaqAccordion from "../components/FaqAccordion/FaqAccordion";
import FaqForm from "../components/FaqForm/FaqForm";
import FaqPanel from "../components/FaqPanel/FaqPanel";

export default function Faq() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item container xs={9}>
          <Grid item xs={12}>
            <FaqAccordion />
          </Grid>
          <Grid item xs={12}>
            <FaqForm />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <FaqPanel />
        </Grid>
      </Grid>
    </Box>
  );
}
