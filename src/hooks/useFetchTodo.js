import axios from "axios";
import { useQuery } from "react-query";


export const useFetchTodo = (itemId) => {
  return useQuery("getEditTodo",  () => {
    return axios.get(`http://localhost:3001/todos/${itemId}`)
  });
};


