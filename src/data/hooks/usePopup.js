import { useState } from "react";

export const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangePopupState = () => setIsOpen((isOpen) => !isOpen);

  const closeOnEsc = () => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        console.log(e.key === "Escape");
        handleChangePopupState();
      }
    };

    if (window) {
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  };

  return {
    handleChangePopupState,
    closeOnEsc,
    isOpen,
  };
};
