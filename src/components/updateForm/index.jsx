import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useEffect } from "react";
import validate from "./validate";
import TextFieldInputs from "./textFieldInputs";
import SelectInputs from "./selectInpus";
import Avatar from "./avatar";
import { useLocalValue } from "../../hooks/useLocalValue";

export default function UpdateForm() {
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});
  const [formValues, setFormValues] = useState({
    firstName: useLocalValue("firstName"),
    lastName: useLocalValue("lastName"),
    email: useLocalValue("email"),
    job: useLocalValue("job"),
    cellPhone: useLocalValue("cellPhone"),
    bio: useLocalValue("bio"),
    country: useLocalValue("country"),
    state: useLocalValue("state"),
    status: useLocalValue("status"),
    avatar: useLocalValue("avatar"),
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    window.localStorage.setItem("profileData", JSON.stringify(formValues));
  };

  useEffect(() => {
    setError(validate(formValues));
  }, [formValues]);

  const textFieldInputs = [
    {
      id: 1,
      type: "text",
      name: "firstName",
      label: "First name",
      error: error.firstName,
      touch: touched.firstName,
      value: formValues.firstName,
    },
    {
      id: 2,
      type: "text",
      name: "lastName",
      label: "Last name",
      error: error.lastName,
      touch: touched.lastName,
      value: formValues.lastName,
    },
    {
      id: 3,
      type: "text",
      name: "email",
      label: "Email",
      error: error.email,
      touch: touched.email,
      value: formValues.email,
    },
    {
      id: 4,
      type: "text",
      name: "job",
      label: "Job",
      error: error.job,
      touch: touched.job,
      value: formValues.job,
    },
    {
      id: 5,
      type: "text",
      name: "cellPhone",
      label: "Cell phone",
      error: error.cellPhone,
      touch: touched.cellPhone,
      value: formValues.cellPhone,
    },
    {
      id: 6,
      type: "text",
      name: "status",
      label: "Status",
      error: error.status,
      touch: touched.status,
      value: formValues.status,
    },
    {
      id: 7,
      type: "text",
      name: "bio",
      label: "Bio",
      error: error.bio,
      touch: touched.bio,
      value: formValues.bio,
    },
  ];

  const selectInputs = [
    {
      id: 1,
      name: "country",
      label: "Country",
      value: formValues.country,
    },
    {
      id: 2,
      name: "state",
      label: "State",
      value: formValues.state,
    },
  ];

  return (
    <Grid
      container
      component="form"
      p={4}
      sx={{ flexDirection: { md: "row", xs: "column-reverse" } }}
      onSubmit={submitHandler}
    >
      <Grid container spacing={4} xs={12} md={7}>
        {textFieldInputs.map((input) => (
          <TextFieldInputs
            key={input.id}
            input={input}
            changeHandler={changeHandler}
            focusHandler={focusHandler}
          />
        ))}
        {selectInputs.map((input) => (
          <SelectInputs
            key={input.id}
            input={input}
            changeHandler={changeHandler}
            formValues={formValues}
          />
        ))}
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
          >
            Save Form
          </Button>
        </Grid>
      </Grid>
      <Grid container md={5} xs={12} justifyContent="center">
        <Avatar
          formValues={formValues}
          setFormValues={setFormValues}
          changeHandler={changeHandler}
        />
      </Grid>
    </Grid>
  );
}
