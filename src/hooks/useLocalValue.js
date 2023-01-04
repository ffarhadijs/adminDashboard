export const useLocalValue = (value) => {
    if (localStorage.getItem("profileData")) {
      return JSON.parse(localStorage.getItem("profileData"))[value];
    } else {
      return "";
    }
  };