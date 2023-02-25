import {
  Box,
  Grid,
  useTheme,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formats } from "../../utils/formats";
import { modules } from "../../utils/modules";
import { styled } from "@mui/material/styles";
import { tokens } from "../../theme";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { getTime } from "../../utils/getTime";
import { getDate } from "../../utils/getDate";
import profile from "../../assets/profile.png";
import useSendEmail from "../../hooks/useSendEmail";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DialogModal from "../DialogModal/DialogModal";

const schema = yup.object().shape({
  email: yup.string().required().email(),
});

const Compose = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState({
    id: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
    label: "React",
    date: getDate(),
    time: getTime(),
    attachment: false,
    from: "",
    profile: profile,
    type: "sent",
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync } = useSendEmail();

  const onSubmit = (data) => {
    try {
      mutateAsync({ ...email, from: data.email, title: data.subject, description:value });
      setOpenDialog(true)
    } catch (error) {
      console.log(error.message);
    }
  };
  const discardHandler = () => {
    navigate(-1);
  };

  const contentChangeHandler = (value) => {
    setValue(value);
  };

  const Input = styled(TextField)({
    "& .MuiInputBase-input": {
      color: colors.grey[100],
      border: "1px solid #CCCCCC",
      padding: "15px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #CCCCCC",
      },
      "&:hover fieldset": {
        border: "1px solid #CCCCCC",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #CCCCCC",
      },
    },
  });

  return (
    <Box sx={{ width: "100%", padding: "40px" }}>
      <IconButton onClick={()=>{navigate(-1);}}>
      <KeyboardBackspaceIcon/>
      </IconButton>
      <Stack
        flexDirection="column"
        alignItems={"start"}
        justifyContent="start"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container alignItems={"center"}>
          <Grid item sm={2}>
            <Typography variant="subtitle2">To:</Typography>
          </Grid>
          <Grid item sm={10}>
            <Input
              {...register("email")}
              placeholder="Sent to..."
              sx={{ width: "100%" }}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : null}
            />
          </Grid>
        </Grid>
        <Grid container alignItems={"center"} sx={{ paddingY: "20px" }}>
          <Grid item sm={2}>
            <Typography variant="subtitle2">Subject:</Typography>
          </Grid>
          <Grid item sm={10}>
            <Input
              {...register("subject")}
              name="subject"
              placeholder="Subject"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container alignItems={"center"}>
          <Grid item sm={2}>
            <Typography variant="subtitle2">Content:</Typography>
          </Grid>
          <Grid item sm={10}>
            <ReactQuill
              style={{ height: "300px" }}
              theme="snow"
              value={value}
              onChange={contentChangeHandler}
              modules={{
                toolbar: {
                  container: modules,
                },
              }}
              formats={formats}
            />
          </Grid>
        </Grid>
        <Stack flexDirection={"row"} columnGap={2}>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            sx={{ color: "white", marginTop: "60px" }}
          >
            Send
          </Button>
          <Button
            variant="contained"
            onClick={discardHandler}
            color="error"
            sx={{ color: "white", marginTop: "60px" }}
          >
            Discard
          </Button>
        </Stack>
      </Stack>
      <DialogModal
        type="sendEmail"
        title="confirmation message"
        content={`your email sent to ${getValues().email}`}
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </Box>
  );
};
export default Compose;
