import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useFetchNote } from "../hooks/useFetchNote";
import { useFetchNotes } from "../hooks/useFetchNotes";

export default function NoteDetail() {
  const { id } = useParams();

  const { data: note, isLoading } = useFetchNote(id);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography>{note.data?.name}</Typography>
      <Typography>{note.data?.date}</Typography>
    </Box>
  );
}
