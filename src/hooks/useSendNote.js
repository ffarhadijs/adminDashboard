import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const sendNote = async (note) => {
  const { data } = await axios.post(`http://localhost:3001/notes`, note);
  return data;
};
export function useSendNote() {
    const queryClient=useQueryClient()
  return useMutation(sendNote,
    {
        onSuccess:()=>{queryClient.invalidateQueries("getNotes")}
    });
}
