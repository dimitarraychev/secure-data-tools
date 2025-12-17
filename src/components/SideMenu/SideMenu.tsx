import { useLocation, useNavigate } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="side-menu">
      <li
        className={location.pathname === "/sha1" ? "active" : ""}
        onClick={() => navigate("/sha1")}
      >
        SHA1
      </li>
      <li
        className={location.pathname === "/sha256" ? "active" : ""}
        onClick={() => navigate("/sha256")}
      >
        SHA256
      </li>
    </ul>
  );
};
export default SideMenu;
