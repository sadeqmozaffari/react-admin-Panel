import ChangeLanguage from "../../components/change-language";
import ChangeTheme from "../../components/change-theme";
import { useAppContext } from "../../contexts/app/app-context";
import { useNavigate } from "react-router";

const TopNav = () => {
  const { language, toggleSidebar } = useAppContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="d-flex align-items-center gap-3">
        <ChangeLanguage />
        <ChangeTheme />
      </div>
      <div className={`${language === "fa" ? "me-auto" : "ms-auto"}`}>
        <button
          className="btn ms-2 btn-outline-danger fw-bolder"
          onClick={logout}
        >
          خارج شوید
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
