import InboxLayout from "../components/inboxLayout";
import InboxSections from "../components/inboxSections";

export default function VueEmail() {
  return (
    <InboxLayout>
      <InboxSections label={"Vue"} />
    </InboxLayout>
  );
}
