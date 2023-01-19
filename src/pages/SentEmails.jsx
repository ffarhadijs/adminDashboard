import { Box } from "@mui/material";
import InboxLayout from "../components/inboxLayout";
import Sent from "../components/sent";

export default function SentEmails() {
  return (
    <InboxLayout>
      <Sent />
    </InboxLayout>
  );
}
