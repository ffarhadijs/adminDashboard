import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateNote = (note) => {
  axios.put(`http://localhost:3001/notes/${note.id}`, note);
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();

  return useMutation(updateNote, {
    onSuccess: () => queryClient.invalidateQueries("getNote"),
  });
};
