import axios from "axios";

export const useFetchEmails = () => {
  return axios.get("http://localhost:3001/emails");
};
