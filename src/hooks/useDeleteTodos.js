import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteTodo = (todoId) => {
    todoId.forEach(id => {
        axios.delete(`http://localhost:3001/todos/${id}`);
    });
};

export const useDeleteTodos = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodos");
    },
  });
};
