export const SubmitButton = ({ label, ...props }) => (
  <button type="submit" className="popup__submit" {...props}>
    {label ?? "Salvar"}
  </button>
);
