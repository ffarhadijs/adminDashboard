import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateProfile = (profileData) => {
  axios.put(`http://localhost:3001/profile/`, profileData);
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile);
};
