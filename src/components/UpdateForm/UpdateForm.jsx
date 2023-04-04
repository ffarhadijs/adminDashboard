import {
  Button,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { tokens } from "../../theme";
import { useFetchCountries } from "../../hooks/useFetchCountries";
import Avatar from "./Avatar/Avatar";
import { useState } from "react";
import { useFetchProfile } from "../../hooks/useFetchProfile";
import axios from "axios";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email(),
  job: yup.string().required("Job is required"),
  cellPhone: yup
    .string()
    .required("Cell phone is required")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Phone number is not correct"
    ),
  status: yup.string().required("status is required"),
  bio: yup.string().required("Bio is required"),
});

export default function UpdateForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: countries, isLoading: countryLoading } = useFetchCountries();
  const { mutate, isLoading } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, defaultValues },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: async () => {
      const resp = await axios.get("http://localhost:3001/profile");
      return resp.data;
    },
  });

  const country = watch("country", false);
  const state = watch("state", false);

  const submitHandler = (data) => {
    mutate(data);
  };
  const TextFieldStyled = styled(TextField)({
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
  });
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
    <Grid
      container
      component="form"
      p={4}
      sx={{ flexDirection: { md: "row", xs: "column-reverse" } }}
      onSubmit={handleSubmit(submitHandler)}
    >
      <Grid container spacing={4} xs={12} md={7}>
        <Grid item xs={12} sm={6} height={"100px"}>
          <InputLabel htmlFor="firstName">First name</InputLabel>
          <TextFieldStyled
            {...register("firstName")}
            error={!!errors?.firstName}
            helperText={errors?.firstName?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} height={"100px"}>
          <InputLabel htmlFor="lastName">Last name</InputLabel>
          <TextFieldStyled
            {...register("lastName")}
            error={!!errors?.lastName}
            helperText={errors?.lastName?.message}
            fullWidth
          />
        </Grid>{" "}
        <Grid item xs={12} sm={6} height={"100px"}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextFieldStyled
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email?.message}
            fullWidth
          />
        </Grid>{" "}
        <Grid item xs={12} sm={6} height={"100px"}>
          <InputLabel htmlFor="job">Job</InputLabel>
          <TextFieldStyled
            {...register("job")}
            error={!!errors?.job}
            helperText={errors?.job?.message}
            fullWidth
          />
        </Grid>{" "}
        <Grid item xs={12} sm={6} height={"100px"}>
          <InputLabel htmlFor="cellPhone">Cell phone</InputLabel>
          <TextFieldStyled
            {...register("cellPhone")}
            error={!!errors?.cellPhone}
            helperText={errors?.cellPhone?.message}
            fullWidth
          />
        </Grid>{" "}
        <Grid item xs={12} sm={6} height={"100px"}>
          <InputLabel htmlFor="status">Status</InputLabel>
          <TextFieldStyled
            {...register("status")}
            error={!!errors?.status}
            helperText={errors?.status?.message}
            fullWidth
          />
        </Grid>{" "}
        <Grid item xs={12} height={"170px"}>
          <InputLabel htmlFor="bio">Bio</InputLabel>
          <TextFieldStyled
            {...register("bio")}
            error={!!errors?.bio}
            helperText={errors?.bio?.message}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid xs={6} height={"100px"}>
          <InputLabel htmlFor={"country"}>Country</InputLabel>
          <Select
            input={<SelectInput />}
            {...register("country")}
            value={country}
            sx={{
              border: `1px solid rgb(110,110,110)`,
            }}
            fullWidth
            disabled={countryLoading}
          >
            {countries?.map((item) => (
              <MenuItem value={item.country} key={item.country}>
                {item.country}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid xs={6} height={"100px"}>
          <InputLabel htmlFor={"state"}>State</InputLabel>
          <Select
            input={<SelectInput />}
            {...register("state")}
            value={state}
            sx={{
              border: `1px solid rgb(110,110,110)`,
            }}
            fullWidth
            defaultValue=""
          >
            {countries
              ?.find((item) => item.country === country)
              ?.states?.map((state) => (
                <MenuItem value={state} key={state}>
                  {state}
                </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid
          xs={12}
          container
          columnGap={4}
          alignItems="center"
          justifyContent={"center"}
          height={"150px"}
        >
          <Button
            variant="contained"
            type={"submit"}
            sx={{
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
            disabled={isLoading}
          >
            Save Form
          </Button>
        </Grid>
      </Grid>
      <Grid container md={5} xs={12} justifyContent="center">
        <Avatar />
      </Grid>
    </Grid>
  );
}
