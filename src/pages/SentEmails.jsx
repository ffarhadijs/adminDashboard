import InboxLayout from "../components/inboxLayout";
import InboxSections from "../components/inboxSections";

export default function SentEmails() {
  return (
    <InboxLayout>
      <InboxSections type={"sent"}/>
    </InboxLayout>
  );
}
