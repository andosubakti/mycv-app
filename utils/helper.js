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

export const phoneCodeChecker = (value, phone_code) => {
  if (value.substring(0, 2) !== phone_code && value.substring(0, 1) !== "0") {
    return phone_code + value;
  } else if (
    value.substring(0, 2) !== phone_code &&
    value.substring(0, 1) === "0"
  ) {
    return phone_code + value.substring(1);
  } else return value;
};
