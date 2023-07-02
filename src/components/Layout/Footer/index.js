import { useEffect } from "react";
import { Normalize } from "../../../functions/Normalize";

export const Footer = () => {
  const { currentYear, updateDate } = Normalize();

  useEffect(() => {
    updateDate();
  }, [updateDate]);

  return (
    <footer className="footer">
      <p>
        &copy; <span className="year">{currentYear}</span> Around The U.S.
      </p>
    </footer>
  );
};
