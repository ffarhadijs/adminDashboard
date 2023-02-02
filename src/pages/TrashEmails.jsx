import InboxLayout from "../components/inboxLayout";
import InboxSections from "../components/inboxSections";

export default function TrashEmails() {
  return (
    <InboxLayout>
      <InboxSections type="trash" />
    </InboxLayout>
  );
}
