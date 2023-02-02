import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EmailContent from "../components/emailContent";
import { Loading } from "../components/loading";
import { useFetchEmail } from "../hooks/useFetchEmail";

export const Email = () => {
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
      <>
        <EmailContent data={data.data} />
      </>
    );
  }
};
