import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateTodo = (todo) => {
  axios.put(`http://localhost:3001/todos/${todo.id}`, todo);
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    },
  });
};
