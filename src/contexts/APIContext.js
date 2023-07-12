import api from "../utils/api";
import { createContext, useState } from "react";

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCards = async () => {
    const results = await api.getCards();

    setCards(results);
  };

  const addCard = async (newCard) => {
    setIsLoading(true);
    const results = await api.setNewCard(newCard);

    setCards([...cards, results]);
    setIsLoading(false);
  };

  const removeCard = async (cardId) => {
    setIsLoading(true);
    await api.deleteCards(cardId);
    setIsLoading(false);
  };

  const changeLikeState = async (cardId, method) => {
    setIsLoading(true);
    await api.setLike(cardId, method);
    setIsLoading(false);
  };

  const handleSubmit = async (e, method, objectOrId, closePopup, reset) => {
    e.preventDefault();

    try {
      await method(objectOrId);

      closePopup();
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
  };

  return (
    <APIContext.Provider
      value={{
        getAllCards,
        handleSubmit,
        addCard,
        removeCard,
        changeLikeState,
        setIsLoading,
        cards,
        isLoading,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
