import InboxLayout from "../components/InboxLayout/InboxLayout";
import InboxSections from "../components/InboxSections/InboxSections";

export default function SentEmails() {
  return (
    <InboxLayout>
      <InboxSections type={"sent"}/>
    </InboxLayout>
  );
}
