import InboxLayout from "../components/InboxLayout/InboxLayout";
import InboxSections from "../components/InboxSections/InboxSections";

export default function AngularEmail() {
  return (
    <InboxLayout>
      <InboxSections label={"Angular"} />
    </InboxLayout>
  );
}
