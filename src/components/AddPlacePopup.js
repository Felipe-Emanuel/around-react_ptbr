import { Input } from "./Form/Input";
import { FormPopup } from "./PopupWithForm";

export const AddPlacePopup = ({
  isAddNewCard,
  handleClick,
  handleChange,
  onhandleAddCardSubmit,
  value,
}) => (
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
