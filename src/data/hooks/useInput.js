import { useState } from "react";

export const useInput = () => {
  const initialValue = { name: "", about: "", imageProfile: "", link: "" };
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const reset = () => setValue(initialValue);

  return {
    handleChange,
    reset,
    value,
  };
};
