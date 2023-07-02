export const Button = ({ children, className, icon, ...props }) => {
  const icons = {
    add: "&#43;",
    close: "&#x2715;",
  };

  const iconHTML = { __html: icons[icon] };

  return (
    <button className={className} {...props}>
      {children || <span dangerouslySetInnerHTML={iconHTML} />}
    </button>
  );
};
