import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const sendTodo = (data) => axios.post(`http://localhost:3001/todos/`, data);

export const useSendTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(sendTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    },
  });
};
