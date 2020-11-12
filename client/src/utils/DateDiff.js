export const getDateDiff = (date) => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  const currentDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  const diff =
    (new Date(currentDate).getTime() - new Date(date).getTime()) / 1000;

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 60 * 60) return `${Math.floor(diff / 60)} minutes`;
  if (diff < 60 * 60 * 24) return `${Math.floor(diff / (60 * 60))} hours`;
  if (diff < 60 * 60 * 30 * 24)
    return `${Math.floor(diff / (60 * 60 * 24))} days`;
  if (diff < 60 * 60 * 24 * 30 * 12)
    return `${Math.floor(diff / (60 * 60 * 24 * 30))} months`;
  if (diff > 60 * 60 * 24 * 30 * 12)
    return `${Math.floor(diff / (60 * 60 * 24 * 30 * 12))} years`;
};
