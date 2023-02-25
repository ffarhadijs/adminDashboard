import { Paper, Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { tokens } from "../../theme"

const DashboardInfoTile=({avatar,number,title,subTitle, backgroundColor})=>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: colors.primary[600],
              height: "auto",
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              columnGap: "20px",
            }}
          >
            <Box
              sx={{ backgroundColor: {backgroundColor}, width: 48, height: 48, borderRadius:"100%", display:"flex", justifyContent:"center",alignItems:"center", color:"black" }}
              >
              {avatar}
            </Box>
            <Box>
              <Typography variant="h5" component={"span"}>
                {" "}
                {number}
              </Typography>
              <Typography variant="subtitle2" component={"span"}>
                {" "}
                {title}
              </Typography>
              <Typography
                variant="caption"
                component={"div"}
                color={colors.grey[200]}
              >
                {subTitle}
              </Typography>
            </Box>
          </Paper>
        </>
    )
}
export default DashboardInfoTile