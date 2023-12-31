import Edit from "../../images/Eddit.svg";
import { Title } from "../Title";
import { Button } from "../../components/Buttons/Button";
import { useState } from "react";
import { usePopup } from "../../data/hooks/usePopup";
import { useInput } from "../../data/hooks/useInput";
import { AddPlacePopup } from "../AddPlacePopup";
import { useApiContext } from "../../data/hooks/useApiContext";
import { EditProfilePopup } from "../EditProfilePopup";
import { capitalizeString } from "../../utils/constants";

export const ProfileHeader = ({
  name,
  about,
  updateCurrentUser,
  updateProfileInfo,
}) => {
  const { isOpen, handleChangePopupState } = usePopup();
  const { value, handleChange, reset } = useInput();
  const { addCard, handleSubmit } = useApiContext();

  const [isAddNewCard, setIsAddNewCard] = useState(false);
  const handleClick = () => setIsAddNewCard((isAddNewCard) => !isAddNewCard);

  const inputValues = {
    name: capitalizeString(value.name),
    about: capitalizeString(value.about),
  };

  const newCard = {
    name: capitalizeString(value.name),
    link: capitalizeString(value.link),
  };

  const onhandleAddCardSubmit = async (e) => {
    handleSubmit(e, addCard, newCard, handleClick, reset);
  };

  const onHandleProfileSubmit = async (e) => {
    e.preventDefault();
    updateCurrentUser(inputValues);
    updateProfileInfo(inputValues);
    handleChangePopupState();
    reset();
  };

  return (
    <>
      <div className="profile__header-info">
        <AddPlacePopup
          handleChange={handleChange}
          handleClick={handleClick}
          isAddNewCard={isAddNewCard}
          onhandleAddCardSubmit={onhandleAddCardSubmit}
          value={value}
        />
        <EditProfilePopup
          handleChange={handleChange}
          handleChangePopupState={handleChangePopupState}
          isOpen={isOpen}
          onHandleProfileSubmit={onHandleProfileSubmit}
          value={value}
        />
        {name === undefined && (
          <div className="skeletonLoading">
            <div className="skeleton-title"></div>
            <div className="skeleton-subTitle"></div>
          </div>
        )}
        <div className="profile__header">
          <Title className="profile__title" title={name} />

          <Button
            className="profile__eddit-button edit-profile"
            onClick={handleChangePopupState}
          >
            <img
              id="edditBbutton"
              src={Edit}
              alt="imagem de um lápis referenciando a possível edição dos dados"
            />
          </Button>
        </div>
        <Title as="h2" className="profile__subtitle" title={about} />
      </div>
      <Title
        as="h2"
        className="profile__subtitle profile__subtitle_mobile"
        title={about}
      />
      <Button
        className="profile__add-button add-image"
        icon="add"
        onClick={handleClick}
      />
    </>
  );
};
