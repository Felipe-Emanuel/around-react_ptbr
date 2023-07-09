import Logo from "../images/logo/Vector.svg";
import Line from "../images/Line.svg";

export const Header = () => (
  <nav className="header">
    <img alt="EUA Afora Logo" src={Logo} className="header__logo" />
    <img
      alt="linha de separação do cabeçalho do site"
      src={Line}
      className="header__line"
    />
  </nav>
);
