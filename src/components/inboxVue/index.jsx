import { Box, Stack } from "@mui/material";
import React from "react";
import { useFetchEmails } from "../../hooks/useFetchEmails";
import { Loading } from "../loading";
import EmailsList from "../emailsList";
import { useQuery } from "react-query";

export default function InboxVue() {
  const { error, data, status } = useQuery("getEmails", useFetchEmails);
  const emailsList = data?.data.filter((items) => items.label === "Vue");
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
