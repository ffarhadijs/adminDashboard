import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  InputLabel,
  styled,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { tokens } from "../../theme";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email(),
  subject: yup.string().required("subject is required"),
  question: yup.string().required("question is required"),
});

export default function FaqForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  const TextInputStyled = styled(TextField)({
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


  return (
    <Box>
      <Typography variant="body1" fontWeight={500} fontSize={18} marginY={1.5}>
        Submit ticket
      </Typography>
      <Grid
        container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
      >
        <Grid item xs={6} sx={{height:"110px"}}>
          <InputLabel htmlFor="name"> Your Name</InputLabel>
          <TextInputStyled
            {...register("name")}
            name="name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={6} sx={{height:"110px"}}>
          <InputLabel htmlFor="email"> Email Address</InputLabel>
          <TextInputStyled
            {...register("email")}
            name="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item xs={12} sx={{height:"110px"}}>
          <InputLabel htmlFor="subject"> Email Subject</InputLabel>
          <TextInputStyled
            {...register("subject")}
            name="subject"
            fullWidth
            error={!!errors.subject}
            helperText={errors.subject?.message}
          />
        </Grid>
        <Grid item xs={12} >
          <InputLabel htmlFor="question"> Question</InputLabel>
          <TextInputStyled
            {...register("question")}
            name="question"
            fullWidth
            multiline
            minRows={6}
            error={!!errors.question}
            helperText={errors.question?.message}
          />
        </Grid>
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          sx={{ marginY: 2, marginX: "18px", color: "white" }}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
}
