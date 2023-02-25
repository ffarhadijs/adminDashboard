import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../../theme";
import { InputLabel, TextField, useTheme } from "@mui/material";

export default function TextFieldInputs({
  input,
  focusHandler,
  changeHandler,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid xs={12} sm={input.name === "bio" ? 12 : 6} height={input.name === "bio" ? "170px" : "100px"}>
      <InputLabel htmlFor={input.name}>{input.label}</InputLabel>
      <TextField
        multiline={input.name === "bio"}
        rows={input.name === "bio" ? 4 : 0}
        error={input.error && input.touch}
        fullWidth
        id={input.name}
        name={input.name}
        sx={{
          "& .MuiInputBase-input": {
            padding: "12px",
            transition: "all 0.5s ease",
            backgroundColor: colors.primary[500],
            "&:focus": {
              backgroundColor: colors.primary[400],
            },
            "&:hover": {
              backgroundColor: colors.primary[400],
            },
          },
          "& .MuiOutlinedInput-root": {
            padding: 0,
            "&:hover fieldset": {
              border: `1px solid ${colors.grey[100]}`,
              transition: "all 0.5s ease",
            },
            "&.Mui-focused fieldset": {
              border: `1px solid ${colors.grey[100]}`,
            },
          },
        }}
        value={input.value}
        onChange={changeHandler}
        onFocus={focusHandler}
        helperText={input.touch && input.error}
      />
    </Grid>
  );
}
