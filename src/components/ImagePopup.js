import { Button } from "./Buttons/Button";

export const ShowedImage = ({ link, name, handleClose, isShowedImage }) => {
  return (
    <div
      className={
        isShowedImage
          ? "showedImage fadeIn"
          : "showedImage__close-image fadeOut"
      }
      onClick={handleClose}
    >
      <div
        className={`showedImage__content ${isShowedImage ? "" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          onClick={handleClose}
          icon="close"
          className="showedImage__close-form popup__close-form"
        />
        <img src={link} alt={name} className="showedImage__image" />
        <div className="showedImage__title">{name}</div>
      </div>
    </div>
  );
};
