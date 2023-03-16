import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  styled,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DoneIcon from "@mui/icons-material/Done";
import { tokens } from "../../theme";
import { useSendNote } from "../../hooks/useSendNote";
import NotesList from "../NotesList/NotesList";

export default function NoteInput() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { register, handleSubmit, reset } = useForm();
  const { mutateAsync: sendNote } = useSendNote();
  const onSubmit = async (data) => {
    const id = Math.floor(Math.random() * 10000);
    const date= new Date().toLocaleString()
    const note = { ...data, id, date };
    try {
      await sendNote(note);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  const Input = styled(TextField)({
    "& .MuiInputBase-input": {
      color: colors.grey[100],
      padding: "15px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #CCCCCC",
      },
      "&:hover fieldset": {
        border: "1px solid #CCCCCC",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #CCCCCC",
      },
    },
  });
  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Input
        required
        fullWidth
        autoFocus
        {...register("name")}
        name="name"
        placeholder="Quick add note"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <DoneIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <NotesList />
    </Box>
  );
}
