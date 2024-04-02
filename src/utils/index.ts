export const formatTemperature = (t: number) => {
  return `${Math.floor(t)}°`;
};

export const getDateTimeFromUnix = (unixTimestamp: number) => {
  const unixTimestampMs = unixTimestamp * 1000;

  // Create a new Date object using the Unix timestamp in milliseconds
  const date = new Date(unixTimestampMs);

  // Get the UTC date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based, so add 1
  const day = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Construct the UTC date string
  const utcDateString = `${day.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${year} ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}${ampm}`;

  return utcDateString;
};
