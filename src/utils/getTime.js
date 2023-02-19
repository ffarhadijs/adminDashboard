export const getTime = () => {
  const formatDateTime = (date) =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    }).format(date);
  return formatDateTime().slice(
    formatDateTime().indexOf(" "),
    formatDateTime().length
  );
};
