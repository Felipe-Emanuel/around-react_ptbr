import LoadingAvatar from "../../images/profile/loadingAvatar.png";
import { usePopup } from "../../data/hooks/usePopup";
import { useInput } from "../../data/hooks/useInput";
import { EditAvatarPopup } from "../EditAvatarPopup";

export const Avatar = ({ avatar, patchAvatar }) => {
  const { isOpen, handleChangePopupState } = usePopup();
  const { value, handleChange, reset } = useInput();

  const newAvatar = {
    avatar: value.imageProfile,
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    patchAvatar(newAvatar)
    handleChangePopupState()
    reset()
  };

  return (
    <div className="profile__info">
      <EditAvatarPopup
        handleChange={handleChange}
        handleChangePopupState={handleChangePopupState}
        imageProfile={value.imageProfile}
        isOpen={isOpen}
        onHandleSubmit={onHandleSubmit}
      />
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
