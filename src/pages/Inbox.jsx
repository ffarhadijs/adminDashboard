import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InboxSideBar from "../components/inboxSideBar";

const Inbox = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate("/apps/inbox/inbox")
  },[])
  return (
    <Stack
      flexDirection={"row"}
      justifyContent="start"
      alignItems={"start"}
      height="100%"
      width={"100%"}
      minHeight="100vh"
    >
      <InboxSideBar />
    </Stack>
  );
};
export default Inbox;
