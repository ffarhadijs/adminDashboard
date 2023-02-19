import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { useState } from "react";
import DialogModal from "../dialogModal";
import { useQueryClient } from "react-query";
import useUpdateEmail from "../../hooks/useUpdateEmail";

const TextArea = styled(InputBase)({
  "& .MuiInputBase-input": {
    fontSize: 14,
    width: "100%",
    padding: "10px",
  },
});

export default function EmailContent({ data }) {
  const [reply, setReply] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const sendReplyHandler = () => {
    setDialogType("sendEmail");
    setOpen(true);
  };
  const trashHandler = () => {
    setDialogType("deleteEmail");
    setOpen(true);
  };
  const { mutateAsync: updateEmail } = useUpdateEmail();
  const deleteHandler = () => {
    updateEmail({ ...data, type: "trash" });
    navigate(-1);
  };
  return (
    <Stack
      sx={{ padding: "25px", width: "100%" }}
      flexDirection={"column"}
      justifyContent="start"
      alignItems={"start"}
    >
      <Box width={"100%"}>
        <Stack
          flexDirection={"row"}
          justifyContent="start"
          alignItems={"start"}
        >
          <Tooltip title="Back to Inbox">
            <IconButton onClick={() => navigate(-1)}>
              <KeyboardBackspaceIcon />
            </IconButton>
          </Tooltip>
          {data.type === "trash" ? null : (
            <Tooltip title="Delete">
              <IconButton onClick={trashHandler}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Move to">
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography variant="h5" marginY={2}>
          {data.title}
        </Typography>
      </Box>

      <Box
        height={"1px"}
        width={"100%"}
        sx={{ backgroundColor: "lightslategrey" }}
      ></Box>

      <Stack
        flexDirection={"row"}
        alignItems="center"
        justifyContent="start"
        width={"100%"}
        marginY={2}
      >
        <Avatar
          src={data.profile}
          alt={data.from}
          sx={{ width: "30px", height: "30px", marginX: "10px" }}
        />
        <Typography variant="subtitle2" component={"span"} fontWeight={400}>
          {data.type === "sent" ? "to" : "from"}{" "}
          <Typography variant="subtitle2" component={"span"} fontWeight={500}>
            {data.from}{" "}
          </Typography>
          on
          <Typography variant="subtitle2" component={"span"} fontWeight={500}>
            {" "}
            {data.date} {data.time}
          </Typography>
        </Typography>
      </Stack>

      <div dangerouslySetInnerHTML={{__html:data.description}} style={{margin: "20px 10px"}}/> 

      {reply ? (
        <Box
          sx={{
            width: "100%",
            backgroundColor: colors.primary[400],
            padding: "20px",
          }}
        >
          <Typography variant="subtitle1" sx={{ paddingBottom: "10px" }}>
            {data.from}
          </Typography>
          <Divider />
          <TextArea multiline rows={4} fullWidth />
          <Stack
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            width="100%"
            marginTop={"20px"}
          >
            <Button
              color="secondary"
              variant="contained"
              sx={{ color: "white" }}
              onClick={sendReplyHandler}
            >
              Send
            </Button>
            <IconButton onClick={() => setReply(false)}>
              <DeleteForeverIcon />
            </IconButton>
          </Stack>
        </Box>
      ) : (
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            padding: "20px",
          }}
          color="secondary"
          onClick={() => setReply(true)}
        >
          Click here to Reply or Forward
        </Button>
      )}
      <DialogModal
        deleteHandler={deleteHandler}
        type={dialogType}
        open={open}
        content={`${
          (dialogType === "sendEmail" && `your email sent to ${data.from}`) ||
          (dialogType === "deleteEmail" && "Are you sure to delete this email?")
        }
      `}
        title={"confirmation message"}
        setOpen={setOpen}
      />
    </Stack>
  );
}
