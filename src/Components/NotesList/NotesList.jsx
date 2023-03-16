import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useFetchNotes } from "../../hooks/useFetchNotes";
import { tokens } from "../../theme";

export default function NotesList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: notesList, isLoading } = useFetchNotes();
  console.log(notesList);
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
      {notesList?.slice(0).reverse().map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <Link to={`${note.id}`}>
            <Box
              padding={2}
              sx={{
                backgroundColor: colors.primary[600],
                border: `1px solid ${colors.primary[400]}`,
                overflow: "auto",
                textOverflow: "ellipsis",
              }}
            >
              <Typography variant="body1">{note.name}</Typography>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
