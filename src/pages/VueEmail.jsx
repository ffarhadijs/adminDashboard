import InboxLayout from "../components/InboxLayout/InboxLayout";
import InboxSections from "../components/InboxSections/InboxSections";

export default function VueEmail() {
  return (
    <InboxLayout>
      <InboxSections label={"Vue"} />
    </InboxLayout>
  );
}
