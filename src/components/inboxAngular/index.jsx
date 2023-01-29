import { Box, Stack } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useFetchEmails } from "../../hooks/useFetchEmails";
import { Loading } from "../loading";
import EmailsList from "../emailsList";

export default function InboxAngular() {
  const { data, status, error } = useQuery("getEmails", useFetchEmails);

  const emailsList = data?.data.filter((items) => items.label === "Angular");

  if (status === "error") {
    console.log(error.message);
  }
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
}
