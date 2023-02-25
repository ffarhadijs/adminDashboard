import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EmailContent from "../components/EmailContent/EmailContent";
import InboxLayout from "../components/InboxLayout/InboxLayout";
import { Loading } from "../components/Loading/Loading";
import { useFetchEmail } from "../hooks/useFetchEmail";

export const EmailDetails = () => {
  const { id } = useParams();

  const { data, error, status } = useQuery(["getEmail", id], useFetchEmail);

  if (status === "loading") {
    <Loading />;
  }
  if (status === "error") {
    console.log(error.message);
  }
  if (status === "success") {
    return (
      <InboxLayout>
        <EmailContent data={data.data} />
      </InboxLayout>
    );
  }
};
