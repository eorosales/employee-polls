export function formatDate() {
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
}
