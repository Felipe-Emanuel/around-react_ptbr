import { useState } from "react";

export const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangePopupState = () => setIsOpen((isOpen) => !isOpen);

  return {
    handleChangePopupState,
    isOpen,
  };
};
