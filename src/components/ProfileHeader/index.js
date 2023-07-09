import Edit from "../../images/Eddit.svg";
import { Title } from "../Title";
import { Input } from "../Form/Input";
import { Button } from "../../components/Buttons/Button";
import { useState } from "react";
import { usePopup } from "../../data/hooks/usePopup";
import { useInput } from "../../data/hooks/useInput";
import { FormPopup } from '../Form/FormPopup'
import { useApiContext } from "../../data/hooks/useApiContext";
import { capitalizeString } from "../utils/constants";

export const ProfileHeader = ({ name, about }) => {
  const { isOpen, handleChangePopupState } = usePopup();
  const { value, handleChange, reset } = useInput();
  const { updateProfileInfo, addCard, handleSubmit } = useApiContext();

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
    handleSubmit(
      e,
      updateProfileInfo,
      inputValues,
      handleChangePopupState,
      reset
    );
  };

  const renderAddImagePopup = () => (
    <div
      className={`popup popup-addImage ${isAddNewCard ? "" : "hidden"}`}
      onClick={handleClick}
    >
      <FormPopup
        formId="popup-addImage"
        title="Novo Lugar"
        handleSubmit={onhandleAddCardSubmit}
        onClick={handleClick}
        isOpen={isAddNewCard}
      >
        <Input
          type="text"
          placeholder="Nome do lugar"
          minLength="2"
          maxLength="30"
          name="name"
          onChange={handleChange}
          value={value.name}
        />
        <Input
          type="url"
          placeholder="URL da imagem"
          name="link"
          onChange={handleChange}
          value={value.link}
        />
      </FormPopup>
    </div>
  );

  const renderProfileEditPopup = () => (
    <div
      className={`popup popup-edit ${isOpen ? "" : "hidden"}`}
      onClick={handleChangePopupState}
    >
      <FormPopup
        formId="popup-edit"
        title="Editar Perfil"
        handleSubmit={onHandleProfileSubmit}
        onClick={handleChangePopupState}
        isOpen={isOpen}
      >
        <Input
          type="text"
          placeholder="Insira seu nome"
          minLength="2"
          maxLength="40"
          name="name"
          onChange={handleChange}
          value={value.name}
        />
        <Input
          type="text"
          placeholder="Insira sua profissão"
          minLength="2"
          maxLength="200"
          name="about"
          onChange={handleChange}
          value={value.about}
        />
      </FormPopup>
    </div>
  );

  return (
    <>
      <div className="profile__header-info">
        {renderAddImagePopup()}
        {renderProfileEditPopup()}
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
