import LoadingAvatar from "../../../../images/profile/loadingAvatar.png";
import { Input } from "../../Form/Input";
import { useInput } from "../../../../data/hooks/useInput";
import { usePopup } from "../../../../data/hooks/usePopup";
import { FormPopup } from "../../Form/FormPopup";
import { useApiContext } from "../../../../data/hooks/useApiContext";

export const Avatar = ({ avatar }) => {
  const { handleSubmit, patchAvatar } = useApiContext();
  const { isOpen, handleChangePopupState } = usePopup();
  const { value, handleChange, reset } = useInput();

  const newAvatar = {
    avatar: value.imageProfile,
  };

  const onHandleSubmit = async (e) => {
    handleSubmit(e, patchAvatar, newAvatar, handleChangePopupState, reset);
  };

  const renderPopup = () => (
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
            value={value.imageProfile}
          />
        </FormPopup>
      </div>
    </div>
  );

  return (
    <div className="profile__info">
      {renderPopup()}
      <div className="profile__avatar">
        {!avatar && <div className="loading" />}
        <img
          className="profile__avatar-image"
          src={!avatar ? LoadingAvatar : avatar}
          alt="Imagem perfil do usuário"
        />
        <div
          className="profile__eddit-image"
          onClick={handleChangePopupState}
        />
      </div>
    </div>
  );
};
