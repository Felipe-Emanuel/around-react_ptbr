import { useState } from "react";

export const Normalize = () => {
  const [currentYear, setCurrentYear] = useState(null);

  const updateDate = () => {
    const date = new Date();
    const year = date.getFullYear();

    setCurrentYear(year);
  };

  const capitalizeString = (str) => {
    return str
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return {
    updateDate,
    capitalizeString,
    currentYear,
  };
};
