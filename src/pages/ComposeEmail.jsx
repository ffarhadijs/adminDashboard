import { Box } from "@mui/material";
import Compose from "../components/compose/Compose";
import InboxLayout from "../components/inboxLayout";
import InboxSections from "../components/inboxSections";

export default function ComposeEmail() {
  return (
    <InboxLayout>
      <Compose/>
    </InboxLayout>
  );
}
