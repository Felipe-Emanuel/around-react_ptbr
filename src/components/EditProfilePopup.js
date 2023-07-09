import { Input } from "./Form/Input";
import { FormPopup } from "./PopupWithForm";

export const EditProfilePopup = ({
  isOpen,
  handleChangePopupState,
  onHandleProfileSubmit,
  handleChange,
  value,
}) => (
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
