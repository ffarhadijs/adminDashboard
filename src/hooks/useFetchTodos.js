import axios from "axios";
import { useQuery } from "react-query";

const fetchTodos = async () => {
  const { data } = await axios.get("http://localhost:3001/todos");
  return data;
};

export const useFetchTodos = () => {
  return useQuery("getTodos", fetchTodos);
};
