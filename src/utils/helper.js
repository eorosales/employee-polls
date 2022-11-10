export const formattedDate = (timestamp) => {
  const created = new Date(timestamp);
  const month = created.toLocaleDateString("en-us", { month: "long" });
  const day = created.getDate();
  const year = created.getFullYear();
  const hours = created.getHours();
  const mins =
    created.getMinutes() < 10
      ? `${created.getMinutes()}`.padStart(2, `0`)
      : created.getMinutes();
  return {
    date: `${month} ${day}, ${year}`,
    time: `${hours}:${mins}`,
  };
};

export const avatar = (author, size) => {
  const firstName = author.slice(" ")[0];
  const lastName = author.slice(" ")[1];
  return (
    <img
      src={`https://ui-avatars.com/api/?size=${size}&rounded=true&name=${firstName}+${lastName}`}
      alt='avatar'
    />
  );
};
