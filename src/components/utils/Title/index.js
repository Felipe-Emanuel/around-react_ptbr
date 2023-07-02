export const Title = ({ as, title, className }) => {
  const Comp = as ?? "h1";

  return <Comp className={className}>{title}</Comp>;
};
