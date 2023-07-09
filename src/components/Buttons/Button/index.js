const icons = {
  add: "&#43;",
  close: "&#x2715;",
};

export const Button = ({ children, className, icon, ...props }) => {
  const iconHTML = { __html: icons[icon] };

  return (
    <button className={className} {...props}>
      {children || <span dangerouslySetInnerHTML={iconHTML} />}
    </button>
  );
};
