import {
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { useEffect, useState } from "react";
import { tokens } from "../../../theme";
import { styled } from "@mui/material/styles";

export default function SelectInputs({ input, formValues, changeHandler }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    axios
      .get("http://localhost:3001/countries")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getCountries();
  }, []);

  const SelectInput = styled(InputBase)({
    "& .MuiInputBase-input": {
      padding: "12px",
      transition: "all 0.5s ease",
      backgroundColor: colors.primary[500],
      "&:hover": {
        backgroundColor: colors.primary[400],
        border: `1px solid ${colors.grey[100]}`,
      },
    },
  });
  return (
    <Grid xs={6} height={"100px"}>
      <InputLabel htmlFor={input.name}>{input.label}</InputLabel>
      <Select
        input={<SelectInput />}
        onChange={changeHandler}
        value={input.value}
        sx={{
          border: `1px solid rgb(110,110,110)`,
        }}
        name={input.name}
        fullWidth
        id={input.name}
      >
        {input.name === "country" &&
          countries?.map((item) => (
            <MenuItem value={item.country} key={item.country}>
              {item.country}
            </MenuItem>
          ))}
        {input.name === "state" &&
          countries
            ?.find((item) => item.country == formValues.country)
            ?.states?.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
      </Select>
    </Grid>
  );
}
