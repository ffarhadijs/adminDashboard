import { CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useFetchNotes } from "../../hooks/useFetchNotes";
import { tokens } from "../../theme";

export default function NotesList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: notesList, isLoading } = useFetchNotes();
  if (isLoading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Grid container spacing={2} paddingY={2}>
      {notesList
        ?.slice(0)
        .reverse()
        .map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Link to={`${item.id}`}>
              <Box
                padding={2}
                sx={{
                  backgroundColor: item.color,
                  border: `1px solid ${colors.primary[400]}`,
                  overflow: "auto",
                  textOverflow: "ellipsis",
                }}
              >
                <Typography variant="body1">{item.name}</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}
