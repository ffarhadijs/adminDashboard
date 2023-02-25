import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../../theme";

export default function ProfileData() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const localValues = JSON.parse(localStorage.getItem("profileData"));

  return (
    <Grid container rowGap={2}>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Full Name
        </Typography>
        <Typography variant="subtitle2">
          {localValues?.firstName} {localValues?.lastName}
        </Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Cell Phone
        </Typography>
        <Typography variant="subtitle2">{localValues?.cellPhone}</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Email
        </Typography>
        <Typography variant="subtitle2">{localValues?.email}</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Job
        </Typography>
        <Typography variant="subtitle2">{localValues?.job}</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Location
        </Typography>
        <Typography variant="subtitle2" component={"span"}>{localValues?.country}</Typography>, {" "}
        <Typography variant="subtitle2" component={"span"}>{localValues?.state}</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography
          variant="subtitle2"
          fontSize="small"
          color={colors.grey[400]}
        >
          Bio
        </Typography>
        <Typography variant="subtitle2">{localValues?.bio}</Typography>
      </Grid>
    </Grid>
  );
}
