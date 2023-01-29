import { Box, Stack } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useFetchEmails } from "../../hooks/useFetchEmails";
import EmailsList from "../emailsList";
import { Loading } from "../loading";

export default function Inbox() {
  const { data, status, error } = useQuery("getEmails", useFetchEmails);

  const emailsList = data?.data.filter((items) => items.type === "recieved");

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "success") {
    return (
      <Stack
        padding={"20px"}
        flexDirection="column"
        alignItems={"start"}
        justifyContent="start"
        sx={{ width: "100%" }}
      >
        <Box sx={{ margin: "0 0 30px 0" }}>filters</Box>
        <EmailsList emailsList={emailsList} />
      </Stack>
    );
  }
  if (status === "error") {
    console.log(error.message);
  }
}
