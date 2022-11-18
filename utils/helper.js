export const getDateToday = () => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const m = month[date.getMonth()];
  const d = date.getDate();
  const y = date.getFullYear();
  return `Today ${m} ${d}, ${y}`;
};
