import axios from "axios";
import { useQuery } from "react-query";

export const useFetchNote = (noteId) => {
  return useQuery(["getNote", noteId], () =>
    axios.get(`http://localhost:3001/notes/${noteId}`)
  );
};
