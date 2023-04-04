import {
  CircularProgress,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchNote } from "../hooks/useFetchNote";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDeleteNote } from "../hooks/useDeleteNote";
import { useUpdateNote } from "../hooks/useUpdateNote";
const colors = [
  { id: 0, color: "#FC7015" },
  { id: 1, color: "#FCE315" },
  { id: 2, color: "#15FC5F" },
  { id: 3, color: "#15DDFC" },
  { id: 4, color: "#9015FC" },
  { id: 5, color: "#FC15EB" },
  { id: 6, color: "#FC154D" },
];
export default function NoteDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: noteData, isLoading } = useFetchNote(id);
  const { mutateAsync: deleteNote, isLoading: loadingDelete } = useDeleteNote();
  const { mutateAsync: updateNote, isLoading: loadingUpdate } = useUpdateNote();
  const { register, handleSubmit } = useForm();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const chooseColorHandler = async (color) => {
    try {
      const editedNote = { ...noteData.data };
      editedNote.color = color;
      await updateNote(editedNote);
      !loadingUpdate && setAnchorEl(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data) => {
    try {
      const editedNote = { ...noteData.data };
      editedNote.name = data.note;
      editedNote.date = new Date().toLocaleString();
      await updateNote(editedNote);
      !loadingUpdate && navigate(-1);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteHandler = async () => {
    try {
      await deleteNote(id);
      !loadingDelete && navigate(-1);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  const Input = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  });

  return (
    <Box padding={"20px"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tooltip title="Note Theme">
          <IconButton onClick={openMenuHandler}>
            <ColorLensIcon />
          </IconButton>
        </Tooltip>
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          {colors.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => chooseColorHandler(item.color)}
              sx={{
                display: "inline-block",
                backgroundColor: item.color,
                padding: "8px",
                margin: "5px",
              }}
            ></MenuItem>
          ))}
        </Menu>
        <Typography variant="body2" fontSize={"13px"}>
          created on: {noteData.data?.date}
        </Typography>
      </Box>
      <Divider orientation="horizontal" sx={{ marginY: "10px" }} />
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("note")}
          name="note"
          multiline
          rows={10}
          fullWidth
          defaultValue={noteData?.data?.name}
        />

        <Box sx={{ position: "fixed", right: "20px", bottom: "40px" }}>
          <Tooltip title="go back">
            <IconButton
              onClick={() => navigate(-1)}
              sx={{
                backgroundColor: "gray",
                marginX: "5px",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
              size="small"
            >
              <ChevronLeftIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="delete note">
            <IconButton
              disabled={loadingDelete}
              onClick={deleteHandler}
              sx={{
                backgroundColor: "red",
                marginX: "5px",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="update edit">
            <IconButton
              disabled={loadingUpdate}
              type="submit"
              color="default"
              sx={{
                backgroundColor: "green",
                marginX: "5px",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
              size="small"
            >
              <DoneIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
