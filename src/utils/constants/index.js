export const updateDate = () => {
  const date = new Date();
  return date.getFullYear();
};


export const capitalizeString = (str) => {
  return str
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
