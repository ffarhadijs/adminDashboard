import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

function getEmail(data) {
  return axios.post(`http://localhost:3001/emails/`, data);
}

const useSendEmail = () => {
  const queryClient = useQueryClient();
  return useMutation(getEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries("getEmail");
    },
  });
};
export default useSendEmail;
