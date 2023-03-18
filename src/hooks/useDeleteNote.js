import axios from "axios";
import { useMutation } from "react-query";

const deleteNote = (id) => {
  axios.delete(`http://localhost:3001/notes/${id}`);
};

export const useDeleteNote = () => {
  return useMutation(deleteNote);
};
