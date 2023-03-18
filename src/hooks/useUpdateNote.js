import axios from "axios";
import { useMutation } from "react-query";

const updateNote = (note) => {
  axios.put(`http://localhost:3001/notes/${note.id}`, note);
};

export const useUpdateNote = () => {
  return useMutation(updateNote);
};
