import axios from "axios";
import { useQuery } from "react-query";

const fetchTodos = () => axios.get("http://localhost:3001/todos");

export const useFetchTodos = () => {
  return useQuery("getTodos", fetchTodos);
};
