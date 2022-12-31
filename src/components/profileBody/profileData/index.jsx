import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../../theme";

export default function ProfileData() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container rowGap={4}>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Full Name
        </Typography>
        <Typography variant="subtitle2">Farhad Farhadi</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Cell Phone
        </Typography>
        <Typography variant="subtitle2">+1 427-332-5682</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Job
        </Typography>
        <Typography variant="subtitle2">Front-end developer</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Location
        </Typography>
        <Typography variant="subtitle2">Iran,Urmia</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Bio
        </Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          rem porro autem, pariatur veritatis sed eaque quia! Aperiam aspernatur
          nobis eius non dignissimos obcaecati nostrum nihil est cupiditate
          magni hic inventore iste vel aut commodi quisquam tempore, odio
          aliquam. Cupiditate dolorum laudantium incidunt dicta illo porro
          cumque, sit animi?
        </Typography>
      </Grid>
    </Grid>
  );
}
