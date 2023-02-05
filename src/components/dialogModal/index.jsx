import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
export default function DialogModal({
  title,
  content,
  open,
  setOpen,
  type,
  deleteHandler,
}) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <Stack
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography variant={"h6"} component="span">
            {title}
          </Typography>
          {type === "sendEmail" && (
            <CheckCircleIcon fontSize="large" color="success" />
          )}
          {type === "deleteEmail" && (
            <ErrorIcon fontSize="large" color="error" />
          )}
        </Stack>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {type === "sendEmail" && (
          <Button
            onClick={() => setOpen(false)}
            color="secondary"
            variant="contained"
            sx={{ color: "white" }}
          >
            Ok
          </Button>
        )}
        {type === "deleteEmail" && (
          <Stack flexDirection={"row"} justifyContent="start" gap={2}>
            <Button
              onClick={deleteHandler}
              color="secondary"
              variant="contained"
              sx={{ color: "white" }}
            >
              Yes
            </Button>
            <Button
              onClick={() => setOpen(false)}
              color="error"
              variant="contained"
              sx={{ color: "white" }}
            >
              Cancel
            </Button>
          </Stack>
        )}
      </DialogActions>
    </Dialog>
  );
}
