import { Title } from "../../Title/index.js";
import { SubmitButton } from "../../Buttons/SubmitButton/index.js";

export const FormPopup = ({
  children,
  title,
  formId,
  onClick,
  isOpen,
  handleSubmit,
  label,
}) => {
  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit}
      className={`popup__form form ${isOpen ? " fadeIn" : "fadeOut"}`}
      id={formId}
    >
      <Title as="h2" className="popup__title" title={title} />
      <button type="button" className="popup__close-form" onClick={onClick}>
        &#x2715;
      </button>
      {children}
      <SubmitButton type="submit" label={label} />
    </form>
  );
};
