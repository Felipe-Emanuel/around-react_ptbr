import api from "../utils/api";
import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  const getUserProfile = async () => {
    const results = await api.getProfile();

    setCurrentUser(results);
  };

  const updateProfileInfo = async (inputValues) => {
    const results = await api.updateProfile(inputValues);

    setCurrentUser(results);
  };

  const patchAvatar = async (avatar) => {
    const results = await api.updateAvatar(avatar);

    setCurrentUser(results);
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, updateProfileInfo, patchAvatar }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
