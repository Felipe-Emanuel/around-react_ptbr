import { useState } from "react";

const initialValue = { name: "", about: "", imageProfile: "", link: "" };

export const useInput = () => {
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
