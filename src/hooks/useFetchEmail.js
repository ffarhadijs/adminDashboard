import axios from "axios";

export const useFetchEmail = (id) => {
  return axios.get(`http://localhost:3001/emails/${id.queryKey[1]}`);
};
