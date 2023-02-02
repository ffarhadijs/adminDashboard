import InboxLayout from "../components/inboxLayout";
import InboxSections from "../components/inboxSections";

export default function InboxEmails() {
  return (
    <InboxLayout>
      <InboxSections type={"recieved"}/>
    </InboxLayout>
  );
}
