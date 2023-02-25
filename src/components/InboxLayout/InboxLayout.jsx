import { Stack } from "@mui/material";
import InboxSideBar from "../InboxSideBar/InboxSideBar";

export default function InboxLayout({ children }) {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent="start"
      alignItems={"start"}
      width="100%"
      height="100%"
    >
      <InboxSideBar />
      {children}
    </Stack>
  );
}
