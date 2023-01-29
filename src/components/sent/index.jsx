import { Box, Stack } from "@mui/material";
import React from "react";
import EmailsList from "../emailsList";
import { useQuery } from "react-query";
import { useFetchEmails } from "../../hooks/useFetchEmails";
import { Loading } from "../loading";

export default function Sent() {
  const { data, status, error } = useQuery("getEmails", useFetchEmails);
  const emailsList = data?.data.filter((items) => items.type === "sent");

  if (status === "error") {
    console.log(error.message);
  }
  if (status === "loading") {
    <Loading />;
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
