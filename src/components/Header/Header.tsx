import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-wrapper" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="logo-text">Integration Utilities</h1>
      </div>
    </header>
  );
};

export default Header;
