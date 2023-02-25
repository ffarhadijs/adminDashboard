import InboxLayout from "../components/InboxLayout/InboxLayout";
import InboxSections from "../components/InboxSections/InboxSections";

export default function TrashEmails() {
  return (
    <InboxLayout>
      <InboxSections type="trash" />
    </InboxLayout>
  );
}
