import axios from "axios";
import { useQuery } from "react-query";

const fetchNotes = async () => {
  const { data } = await axios.get("http://localhost:3001/notes");
  return data;
};

export function useFetchNotes() {
  return useQuery("getNotes",fetchNotes);
}
