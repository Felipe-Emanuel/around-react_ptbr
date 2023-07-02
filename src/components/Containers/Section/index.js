export const Section = ({ children, className }) => (
  <section className={className ?? "section"}>{children}</section>
);
