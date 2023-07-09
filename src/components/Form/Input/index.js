export const Input = ({ name, onChange, value, ...props }) => (
  <input
    value={value}
    className="popup__input input"
    name={name}
    id={name}
    onChange={onChange}
    placeholder="Insira seu nome"
    required
    {...props}
  />
);
