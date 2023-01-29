import { Box, Stack } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Loading } from "../loading";
import { useFetchEmails } from "../../hooks/useFetchEmails";
import EmailsList from "../emailsList";

export default function InboxReact() {
  const { data, error, status } = useQuery("getEmails", useFetchEmails);

  const emailsList = data?.data.filter((items) => items.label === "React");

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
