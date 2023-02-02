import { Box } from "@mui/material";
import InboxLayout from "../components/inboxLayout";
import InboxSections from "../components/inboxSections";

export default function AngularEmail() {
  return (
    <InboxLayout>
      <InboxSections label={"Angular"} />
    </InboxLayout>
  );
}
