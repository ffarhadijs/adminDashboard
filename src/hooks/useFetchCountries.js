import axios from "axios";
import { useQuery } from "react-query";

const fetchCountries = async () => {
  const { data } = await axios.get("http://localhost:3001/countries");
  return data;
};

export function useFetchCountries() {
  return useQuery("getCountries",fetchCountries);
}
