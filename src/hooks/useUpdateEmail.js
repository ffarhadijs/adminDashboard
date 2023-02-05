import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

function getEmail(data) {
  return axios.put(`http://localhost:3001/emails/${data.id}`, data);
}

const useUpdateEmail = () => {
  const queryClient = useQueryClient();
  return useMutation(getEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries("getEmails");
    },
  });
};
export default useUpdateEmail;
