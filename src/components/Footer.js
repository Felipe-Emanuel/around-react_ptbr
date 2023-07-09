import { updateDate } from "./utils/constants";

export const Footer = () => {

  return (
    <footer className="footer">
      <p>
        &copy; <span className="year">{updateDate()}</span> Around The U.S.
      </p>
    </footer>
  );
};
