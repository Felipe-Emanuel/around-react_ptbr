import { FormPopup } from "./PopupWithForm";

export const RemoveCardPopup = ({isOpen, handleChangePopupState, handleRemoveCard, currentCardId}) => (
  <div
      className={`popup popup-removeCard ${isOpen ? "" : "hidden"}`}
      onClick={() => handleChangePopupState()}
    >
      <FormPopup
        formId="popup-edit"
        title="Tem certeza?"
        onClick={() => handleChangePopupState()}
        handleSubmit={(e) => handleRemoveCard(e, currentCardId)}
        isOpen={isOpen}
        label="sim"
      />
    </div>
)
