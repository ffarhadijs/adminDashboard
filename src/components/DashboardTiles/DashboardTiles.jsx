import { Email, Group, ManageAccounts } from "@mui/icons-material";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Charts from "../Charts/Charts";
import DashboardInfoTile from "../dashboardInfoTile";

export default function DashboardTiles() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <DashboardInfoTile
            avatar={<Email />}
            number={125}
            title={"Emails"}
            subTitle={"6 new arrivals."}
            backgroundColor="lightpink"
          />
        </Grid>
        <Grid xs={4}>
          <DashboardInfoTile
            avatar={<Group />}
            number={40}
            title={"Projects"}
            subTitle={"38 opens"}
            backgroundColor="lightgreen"
          />
        </Grid>
        <Grid xs={4}>
          <DashboardInfoTile
            avatar={<ManageAccounts />}
            number={600}
            title={"Users"}
            subTitle={"382 VIPs"}
            backgroundColor="lightsalmon"
          />
        </Grid>
        <Grid xs={4}>
          <Charts type="bar" title="Emails monitor" />
        </Grid>
        <Grid xs={4}>
          <Charts type="line" title="Projects monitor"/>
        </Grid>
        <Grid xs={4}>
          <Charts type="pie" title="Users monitor"/>
        </Grid>
      </Grid>
    </Box>
  );
}
