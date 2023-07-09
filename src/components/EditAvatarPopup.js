import { Input } from "./Form/Input";
import { FormPopup } from "./PopupWithForm";

export const EditAvatarPopup = ({isOpen, handleChangePopupState, onHandleSubmit, handleChange, imageProfile}) => (
<div
      className={`popup popup-addImage ${isOpen ? "" : "hidden"}`}
      onClick={handleChangePopupState}
    >
      <div className="popup popup-imageProfile">
        <FormPopup
          formId="popup-imageProfile"
          title="Alterar a foto do perfil"
          handleSubmit={onHandleSubmit}
          onClick={handleChangePopupState}
          isOpen={isOpen}
        >
          <Input
            type="url"
            placeholder="URL da imagem"
            name="imageProfile"
            onChange={handleChange}
            value={imageProfile}
          />
        </FormPopup>
      </div>
    </div>
)
