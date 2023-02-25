import InboxLayout from "../components/InboxLayout/InboxLayout";
import InboxSections from "../components/InboxSections/InboxSections";

export default function InboxEmails() {
  return (
    <InboxLayout>
      <InboxSections type={"recieved"}/>
    </InboxLayout>
  );
}
