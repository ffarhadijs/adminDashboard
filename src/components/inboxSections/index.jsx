import { Stack } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useFetchEmails } from "../../hooks/useFetchEmails";
import EmailsList from "../emailsList";
import { Loading } from "../loading";

export default function InboxSections({ type, label }) {
  const { data, status, error } = useQuery("getEmails", useFetchEmails);

  const emailsList = data?.data?.filter((items) =>
    type ? items.type === type : items.label === label
  );

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
        <EmailsList emailsList={emailsList} />
      </Stack>
    );
  }
  
  if (status === "error") {
    console.log(error.message);
  }
}
